from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from dotenv import load_dotenv
from langchain.agents import create_tool_calling_agent, AgentExecutor

import os

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

llm = ChatGroq(temperature=0, groq_api_key=GROQ_API_KEY, model_name="llama-3.1-8b-instant")

system = "You are a helpful assistant."
human = "Explain the importance of low latency LLMs in short"
# human = "{text}"
prompt = ChatPromptTemplate.from_messages([("system", system), ("human", human)])
#
# chain = prompt | llm
# print(chain.invoke({"text": "Explain the importance of low latency LLMs in short"}))

# create_tool_calling_agent(llm, tools, prompt)
