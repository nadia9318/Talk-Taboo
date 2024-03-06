import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SendIcon } from '/workspaces/Talk-Taboo/talk-taboo-app/src/assets/img/material-symbols_send-outline.svg'


function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle sending the message
    console.log("Message sent");
  };

  return (
    <ChatContainer>
      <h2>Chat with our Bot</h2>
      <form onSubmit={handleSubmit}>
        <ChatInput type="text" placeholder="Say something..." />
        <SendButton type="submit">
          <SendIcon />
        </SendButton>
      </form>
    </ChatContainer>
  );
}

export default Home;

// Styled-components remain the same


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
