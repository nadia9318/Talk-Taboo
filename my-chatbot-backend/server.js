require('dotenv').config();
const express = require('express');
const openai = require('openai');

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());


// OpenAI configuration
openai.apiKey = process.env.OPENAI_API_KEY;

app.use(express.json()); // Middleware to parse JSON bodies

// Define the /chat endpoint
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const gptResponse = await openai.Completion.create({
      model: "gpt-3.5-turbo-0125", // or any other model
      prompt: message,
      temperature: 0.5,
      max_tokens: 150,
    });

    res.json({ reply: gptResponse.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
