from langchain_core.tools import tool
import requests

@tool
def get_leetcode_statistics(username: str) -> int:
    """
    Fetch LeetCode statistics for the specified username.

    Args:
    - username (str): LeetCode username to fetch statistics for.

    Returns:
    - int: Total submissions by the user.

    Raises:
    - ValueError: If the API request fails or returns unexpected data.
    """
    url = f"http://localhost:3000/userProfile/{username}"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad status codes

        # Parse the response JSON
        data = response.json()

        # Extract and return 'totalSubmissions'
        total_submissions = data.get('totalSubmissions', 0)
        if isinstance(total_submissions, int):
            return total_submissions
        else:
            raise ValueError(f"Unexpected data format for {username}: {data}")
    except requests.RequestException as e:
        raise ValueError(f"Failed to fetch data for {username}: {e}")
