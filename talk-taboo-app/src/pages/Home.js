import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SendIcon } from '/workspaces/Talk-Taboo/talk-taboo-app/src/assets/img/material-symbols_send-outline.svg';
import { ReactComponent as ShareIcon } from '/workspaces/Talk-Taboo/talk-taboo-app/src/assets/img/material-symbols_share-outline.svg';

const ChatContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 196px;
`;

const Message = styled.div`
  background-color: ${(props) => (props.sender === 'user' ? '#CBF4E1' : '#402353')};
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  align-self: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
`;

const InputContainer = styled.form`
  display: flex;
  margin-top: auto;
`;

const ChatInput = styled.input`
display: flex;
width: 915px;
height: 64px;
adding: 17.737px 35.473px;
align-items: center;
gap: 11.085px;
border-radius: 57.644px;
 border: 2px solid var(--side-panel-gradient, #402353);
 background: var(--Color-Base-Base-50, #FFF);
`;

const SendButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ShareButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

function Home() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = { sender: 'user', text: message };
    
    // Optimistically add the user message to the conversation
    setConversation((conv) => [...conv, userMessage]);

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message}),
      });
      const data = await response.json();
      
      // Add the bot's response to the conversation
      setConversation((conv) => [...conv, { sender: 'bot', text: data.reply }]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }

    setMessage(''); // Clear input field
  };

  return (
    <ChatContainer>
      <div>
        {conversation.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.text}
          </Message>
        ))}
      </div>
      <InputContainer onSubmit={handleSubmit}>
        <ChatInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something..."
        />
        <SendButton type="submit">
          <SendIcon />
        </SendButton>
        <ShareButton type="button"> {/* Corrected type and closing tag */}
          <ShareIcon />
        </ShareButton>
      </InputContainer>
    </ChatContainer>
  );
}

export default Home;




//const ChatContainer = styled.div`
  //display: inline-flex;
  //flex-direction: column;
  //align-items: center;
  //gap: 196px;
//`;

//const ChatInput = styled.input`
  //display: flex;
  //width: 915px;
  //height: 64px;
  //padding: 17.737px 35.473px;
  //align-items: center;
 // gap: 11.085px;
 // border-radius: 57.644px;
 // border: 2px solid var(--side-panel-gradient, #402353);
 // background: var(--Color-Base-Base-50, #FFF);
//`;

//const SendButton = styled.button`
 // padding: 10px;
//background-color: #007bff;
// color: white;
//  border: none;
 // cursor: pointer;

//  &:hover {
 ////   background-color: #0056b3;
//  }
//`;
