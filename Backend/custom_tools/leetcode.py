from langchain_core.tools import tool
import requests

from Backend.extract.leetcode_graphql import retrieve_leetcode_data


@tool
def get_leetcode_statistics(username: str) -> dict:
    """
    Fetch LeetCode statistics for the specified username.

    Args:
    - username (str): LeetCode username to fetch statistics for.

    Returns:
    - int: Leetcode account data for the specified username

    Raises:
    - ValueError: If the API request fails or returns unexpected data.
    """
    try:
        return retrieve_leetcode_data(username)
        # Extract and return 'totalSubmissions'
        # total_submissions = data.get('totalSubmissions', 0)
        # if isinstance(total_submissions, int):
        #     return total_submissions
        # else:
        #     raise ValueError(f"Unexpected data format for {username}: {data}")
    except requests.RequestException as e:
        raise ValueError(f"Failed to fetch data for {username}: {e}")
