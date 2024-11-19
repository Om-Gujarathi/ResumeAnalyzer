from scholarly import scholarly
from langchain_core.tools import tool

@tool
def fetch_and_display_publications(author_id):
    """
    Fetch an author's profile and publications using Google Scholar, then display them.

    Args:
    - author_id (str): The unique Google Scholar ID for the author.

    Returns:
    - None: Prints the author details and their publications.
    """
    try:
        # Fetch the author's profile using their Google Scholar ID
        print(f"Fetching publications for author ID: {author_id}\n")
        author = scholarly.search_author_id(author_id)
        detailed_author = scholarly.fill(author)  # Fill in detailed information

        # Display author details
        author_name = detailed_author.get('name', 'Unknown Author')
        print(f"Author: {author_name}\n")

        # Display their publications
        if 'publications' in detailed_author:
            print("Publications:")
            for i, publication in enumerate(detailed_author['publications']):
                title = publication['bib'].get('title', 'No Title')
                year = publication['bib'].get('pub_year', 'N/A')
                print(f"{i + 1}. Title: {title}")
                print(f"   Year: {year}")
        else:
            print("No publications found for this author.")

    except Exception as e:
        print(f"Error fetching author data: {e}")