import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../src/Components/Header.js';
import Footer from './Components/Footer.js';

const ChatbotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 70px; /* Adjusted padding to accommodate the header */
`;

const ChatContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  overflow-y: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
`;

const Message = styled.div`
  background-color: #F5D2D2;
  padding: 10px;
  margin: 8px;
  border-radius: 8px;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const InputContainer = styled.div`
  display: flex;
  width: 50%;
  margin-top: 10px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const SendButton = styled.button`
  background-color: #EF6968;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
`;

const Doubts = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, user: 'user' }]);
      // Implement logic to handle bot response here if needed
      setInputText('');
    }
  };

  return (
    <>
      <Header />
      <ChatbotWrapper>
        <ChatContainer>
          {messages.map((message, index) => (
            <Message key={index} isUser={message.user === 'user'}>
              {message.text}
            </Message>
          ))}
        </ChatContainer>
        <InputContainer>
          <InputField
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <SendButton onClick={handleSendMessage}>Send</SendButton>
        </InputContainer>
      </ChatbotWrapper>
      <Footer/>
    </>
  );
};

export default Doubts;
