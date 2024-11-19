from scholarly import scholarly

# Search for the user profile
search_query = scholarly.search_author_id('xYE0PuUAAAAJ')
author = scholarly.fill(search_query)
print(author['publications'])
# Print all publications
for publication in author['publications']:
    print(f"Title: {publication['bib']['title']}")
    print(f"Year: {publication.get('bib', {}).get('pub_year','N/A')}")