from linkedin_api import Linkedin
from dotenv import load_dotenv
import os
from langchain_core.tools import tool

# Load environment variables
load_dotenv()

# Authenticate using LinkedIn credentials
LINKEDIN_USERNAME = os.getenv("LINKEDIN_USERNAME")
LINKEDIN_PASSWORD = os.getenv("LINKEDIN_PASSWORD")

api = Linkedin(LINKEDIN_USERNAME, LINKEDIN_PASSWORD)


@tool
def fetch_linkedin_account(username):
    """Fetch LinkedIn posts and return them along with other data."""
    try:
        print(f"Fetching data for user: {username}")

        # Fetch the latest posts
        posts = api.get_profile_posts(username, post_count=5)
        post_texts = []

        for i, post in enumerate(posts):
            if post.get('commentary') and post['commentary'].get('text'):
                post_texts.append(post['commentary']['text']['text'])
            else:
                post_texts.append("No text content found in the post.")

        # Return posts for scoring
        return post_texts
    except Exception as e:
        print(f"Error fetching LinkedIn data: {e}")
        return []
