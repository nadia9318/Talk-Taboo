// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle sending the message
    console.log("Message sent");
  };


  return (
    <ChatContainer>
      <h2>Chat with our Bot</h2>
      <ChatInput type="text" placeholder="Say something..." />
      <SendButton>Send</SendButton>
    </ChatContainer>
  );
}


export default Home;

const ChatContainer = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 196px;
`;

const ChatInput = styled.input`
display: flex;
width: 915px;
height: 64px;
padding: 17.737px 35.473px;
align-items: center;
gap: 11.085px;
border-radius: 57.644px;
border: 2px solid var(--side-panel-gradient, #402353);
background: var(--Color-Base-Base-50, #FFF);
`;

const SendButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
