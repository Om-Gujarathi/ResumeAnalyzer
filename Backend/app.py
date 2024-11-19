import threading
from custom_tools.leetcode import get_leetcode_statistics
from custom_tools.github import fetch_github_data
from custom_tools.google_scholar import fetch_and_display_publications
from custom_tools.linkedin import fetch_linkedin_account

def fetch_all_profiles(username: str):
    """
    Create a multithreaded environment to fetch data from multiple profiles for the given username.
    """
    threads = []

    # Creating threads for each profile fetcher
    thread_1 = threading.Thread(target=get_leetcode_statistics, args=(username,))
    thread_2 = threading.Thread(target=fetch_github_data, args=(username,))
    thread_3 = threading.Thread(target=fetch_and_display_publications, args=(username,))
    thread_4 = threading.Thread(target=fetch_linkedin_account, args=(username,))

    # Starting threads
    threads.append(thread_1)
    threads.append(thread_2)
    threads.append(thread_3)
    threads.append(thread_4)

    thread_1.start()
    thread_2.start()
    thread_3.start()
    thread_4.start()

    # Wait for all threads to finish
    for thread in threads:
        thread.join()

if __name__ == "__main__":
    username = "example_user"  # Replace with the username you want to fetch data for
    print(f"Fetching profiles for username: {username}\n")
    fetch_all_profiles(username)
    print("\nProfile fetching completed.")
