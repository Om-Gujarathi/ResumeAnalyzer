from langchain_core.tools import tool
import requests

@tool
def get_leetcode_statistics(username: str) -> int:
    """Get the  Leetcode statistics for the specified username."""
    url = f"http://localhost:3000/userProfile/{username}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data.get('totalSubmissions', 0)  # Assumes the API returns a field 'total_submissions'
    else:
        raise ValueError(f"Failed to fetch data for {username}. Status code: {response.status_code}")