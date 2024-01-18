"""
chat bot app for agritechly platform
it use RAG model and AgriBERT model
it will be use flask for web app
"""

# Import Langchain
from langchain.document_loaders import PyPDFLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.chains import RetrievalQA
from langchain.embeddings import HuggingfaceEmbedding
from langchain.text_splitter import RecursiveCharacterSTextSplitter

# use streamlit for test
import streamlit as st

# use watsonx interface
from watsonxlangchain import LangChainInterface

#Setup credentials dictionary
creds = {
    'apikey':'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',
    'url':'https://api-inference.huggingface.co/models/recobo/agriculture-bert-uncased'
}

# Create LLM using LangChain
llm = LangChainInterface(
    credentials=creds,
    model = 'recobo/agriculture-bert-uncased',
    params = {
        'decoding_method': 'sample',
        'max_new_tokens': 200,
        'temperature': 0.5,
    },
    project_id = 'Bearer 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'
    )

#Setup the app title
st.title("Agritechly Chatbot")

# Setupt a session state message variable to hold all the old messages
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display all the old messages
for message in st.session_state.messages:
    st.chat_message(message['role']).markdown(message['message'])

#Build a prompt input template to display the prompts
prompt = st.chat_input("You: ")

# if the user click enter
if prompt:
    # Display the prompt
    st.chat_message('user').markdown(prompt)
    # Store the user prompt in state
    st.session_state.messages.append({'role': 'user', 'message': prompt})
    # Send the prompt to the model and get the response
    response = llm(prompt)
    # Show the LLm response
    st.chat_message('Agribot').markdown(response)
    # Store the response in state
    st.session_state.messages.append({'role': 'Agribot', 'message': response})

