document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage('user', userInput);
        // Here you would call your backend to get a response from OpenAI
        fetch('/your-backend-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message: userInput}),
        })
        .then(response => response.json())
        .then(data => {
            addMessage('bot', data.answer); // Assuming 'data.answer' contains the response
        })
        .catch(error => console.error('Error:', error));
    }
});

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElem = document.createElement('div');
    messageElem.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElem);
    document.getElementById('user-input').value = ''; // Clear input after sending
}
