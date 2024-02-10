import React from 'react';
import styled, { keyframes } from 'styled-components';
import Robot from './images/robot.jpg'
import Header from './Components/Header.js';

const waveAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-20deg);
  }
`;

const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
`;

const WelcomeSection = styled.div`
  background-color: #f7f7f7;
  text-align: center;
  padding: 50px;
  height: 100vh;
  padding-top: 180px;
`;

const RobotContainer = styled.div`
  margin-bottom: 20px;
`;

const RobotImage = styled.img`
  width: 150px;
  height: 150px;
  animation: ${waveAnimation} 2s infinite;
`;

const RobotText = styled.p`
  font-size: 18px;
  color: #333;
`;

const SubjectOptions = styled.div`
  margin-top: 30px;
`;

const Heading2 = styled.h2`
  font-size: 24px;
  color: #333;
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OptionListItem = styled.li`
  display: inline-block;
  margin: 10px;
`;

const OptionLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const Subjects = () => {
  return (
    <>
    <Header />
    <Body>
      <WelcomeSection>
        <RobotContainer>
          <RobotImage src={Robot} alt="Waving Robot" />
          <RobotText>Hello, I'm your BotTeacher!</RobotText>
        </RobotContainer>
        <SubjectOptions>
          <Heading2>Choose a Subject</Heading2>
          <OptionsList>
            <OptionListItem>
              <OptionLink href="/english">English</OptionLink>
            </OptionListItem>
            <OptionListItem>
              <OptionLink href="/maths">Mathematics</OptionLink>
            </OptionListItem>
            <OptionListItem>
              <OptionLink href="/geography">Geography</OptionLink>
            </OptionListItem>
          </OptionsList>
        </SubjectOptions>
      </WelcomeSection>
    </Body>
    </>
  );
};

export default Subjects;
