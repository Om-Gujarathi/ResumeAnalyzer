from dotenv import load_dotenv
from extract.read_from_pdf import get_resume_text_and_links
import os
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# prompt = ChatPromptTemplate.from_messages([
#     ("system", "you're a Resume Analyzer"),
#     ("human", "{input}"),
#     ("placeholder", "{agent_scratchpad}"),
# ])
#
# tools = [get_leetcode_statistics]
#
# llm = ChatGroq(temperature=0, groq_api_key=GROQ_API_KEY, model_name="llama3-groq-8b-8192-tool-use-preview")
#
# agent = create_tool_calling_agent(llm, tools, prompt)
# agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

ResumeText, ResumeLinks = get_resume_text_and_links("Resume.pdf")

print(ResumeText)
print(ResumeLinks)

# agent_executor.invoke({"input": "Give me the statistics for this leetcode account : OmGujarathi"})

