from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import ConfigurableField
from langchain_core.tools import tool
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_groq import ChatGroq
from dotenv import load_dotenv
import requests

# Import things that are needed generically
from langchain.pydantic_v1 import BaseModel, Field
from langchain.tools import BaseTool, StructuredTool, tool

import os
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# @tool
# def multiply(x: float, y: float) -> float:
#     """Multiply 'x' times 'y'."""
#     return x * y
#
# @tool
# def exponentiate(x: float, y: float) -> float:
#     """Raise 'x' to the 'y'."""
#     return x**y
#
# @tool
# def add(x: float, y: float) -> float:
#     """Add 'x' and 'y'."""
#     return x + y

# Define the tool to get the total submissions for a specific username
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


prompt = ChatPromptTemplate.from_messages([
    ("system", "you're a helpful assistant"),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

tools = [get_leetcode_statistics]


llm = ChatGroq(temperature=0, groq_api_key=GROQ_API_KEY, model_name="llama3-groq-8b-8192-tool-use-preview")


agent = create_tool_calling_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

agent_executor.invoke({"input": "Give me the statistics for this leetcode account : OmGujarathi"})