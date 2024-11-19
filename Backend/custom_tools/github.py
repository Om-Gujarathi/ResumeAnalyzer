import requests
from langchain_core.tools import tool


@tool
def fetch_github_data(username):
    """
    Fetch GitHub user data and repositories by username.
    :param username: GitHub username
    :return: Dictionary containing user info and repositories
    """
    try:
        user_url = f"https://api.github.com/users/{username}"
        repos_url = f"https://api.github.com/users/{username}/repos"

        user_data = requests.get(user_url).json()
        repos_data = requests.get(repos_url).json()

        user_info = {
            "username": user_data.get("login"),
            "name": user_data.get("name", "Not provided"),
            "public_repos": user_data.get("public_repos"),
            "followers": user_data.get("followers"),
            "following": user_data.get("following"),
        }
        repositories = [
            {"name": repo['name'], "description": repo.get('description', 'No description'),
             "stars": repo['stargazers_count']}
            for repo in repos_data
        ]

        return {"user_info": user_info, "repositories": repositories}
    except Exception as e:
        return {'error': str(e)}
