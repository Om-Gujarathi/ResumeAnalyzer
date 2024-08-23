from linkedin_api import Linkedin
import json, os
from dotenv import load_dotenv

load_dotenv()

# Authenticate using any Linkedin account credentials
LINKEDIN_USERNAME = os.getenv("LINKEDIN_USERNAME")
LINKEDIN_PASSWORD = os.getenv("LINKEDIN_PASSWORD")

api = Linkedin(LINKEDIN_USERNAME, LINKEDIN_PASSWORD)

# GET a profile
profile = api.get_profile('omgujarathi')

# GET a profile's contact info
contact_info = api.get_profile_contact_info('omgujarathi')

# GET 1st-degree connections of a given profile
connections = api.get_profile_connections('omgujarathi')

# GET the latest post from the profile
post = api.get_profile_posts('omgujarathi', post_count=5)

# Convert the post to a JSON string
post_json = json.dumps(post, indent=4)

# Extract and print the text content of the post
for i in range(len(post)):
    if post and post[i].get('commentary') and post[i]['commentary'].get('text'):
        post_text = post[i]['commentary']['text']['text']
        print("\nPost Text:", i+1)
        print(post_text)
    else:
        print("No text content found in the post.")
