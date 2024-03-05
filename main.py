from openai import OpenAI

client = OpenAI(api_key = "OPENAI_API_KEY")

# Replace 'file_path' with the path to your JSONL file
response = openai.File.create(
  file=open('file_path.jsonl'),
  purpose='fine-tune'
)


print(response)



# Add next to fine tune the model
response = openai.FineTune.create(
  training_file=response['id'],
  model="gpt-3.5-turbo",
  n_epochs=4,
  learning_rate_multiplier=0.1,
  prompt_loss_weight=0.1,
)

print(response)


# To use your fine-tuned model, you'll make API requests similar to how you use the base models, but you'll specify your fine-tuned model's ID. Here's an example in Python:
response = openai.Completion.create(
  model="your_fine_tuned_model_id",
  prompt="Customer: How do I change my email address?",
  max_tokens=50
)

print(response.choices[0].text.strip())
