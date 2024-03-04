// server.js
require('dotenv').config();
const express = require('express');
const openai = require('openai');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can choose any port

// Your OpenAI API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

openai.apiKey = OPENAI_API_KEY;

// Middleware
app.use(bodyParser.json());

// Route to handle chat requests
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await openai.Completion.create({
            model: "text-davinci-003", // Or whichever model you're using
            prompt: userMessage,
            temperature: 0.5,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        // Send the OpenAI response back to the frontend
        res.json({ answer: response.choices[0].text.trim() });
    } catch (error) {
        console.error("Error calling OpenAI:", error);
        res.status(500).send("Error processing your request");
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
