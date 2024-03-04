from openai import OpenAI

client = OpenAI(api_key = "OPENAI_API_KEY")

# Replace 'file_path' with the path to your JSONL file
response = openai.File.create(
  file=open('file_path.jsonl'),
  purpose='fine-tune'
)

print(response)
