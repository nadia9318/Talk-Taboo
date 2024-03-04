from openai import OpenAI
from flask import FLask, request, jsonify
client = OpenAI(api_key = "")

def chat_with_gpt(prompt):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
             {"role": "user", "content": prompt},
                 ]
    )

    return response.choices[0].message.content.strip()

if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["quit", "exit", "bye"]:
            break

        response = chat_with_gpt(user_input)
        print("Chatbot: ", response)

        app = Flask(__name__)

        my_assistant = client.beta.assistants.retrieve(
    "asst_gFROEE5O8hHTYJi66AD3kO22}")
print(my_assistant)