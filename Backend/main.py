from dotenv import load_dotenv
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq

from Backend.custom_tools.leetcode import get_leetcode_statistics
from Backend.custom_tools.google_scholar import fetch_and_display_publications
from extract.read_from_pdf import get_resume_text_and_links
import os
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

prompt = ChatPromptTemplate.from_messages([
    ("system", "you're a Resume Analyzer"),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

tools = [get_leetcode_statistics, fetch_and_display_publications]

llm = ChatGroq(temperature=0, groq_api_key=GROQ_API_KEY, model_name="llama3-groq-8b-8192-tool-use-preview")

agent = create_tool_calling_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

ResumeText, ResumeLinks = get_resume_text_and_links("Resume.pdf")

print(ResumeText)
print(ResumeLinks)

agent_executor.invoke({"input": f"This is a Resume of a candidate:\n {ResumeText}. Here are the links in this resume:\n {ResumeLinks}. Can I hire him for a position of software engineer? Analyse his leetcode account and tell me how good this person is in DSA with his actual leetcode data. Also judge how active this person is on leetcode. If there exists a google scholar profile, analyse that as well on how many research publications he has."})

