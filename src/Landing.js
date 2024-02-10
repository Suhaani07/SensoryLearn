import React from 'react';
import styled from 'styled-components';
import img1 from './images/mainImage.jpeg';
import img2 from './images/img2.png';
import Header from '../src/Components/Header.js';

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  padding: 4px;
  background-color: #F5D2D2;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 130px;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 20px;
`;

const HeroText = styled.div`
  flex: 1;
`;

const Heading = styled.h1`
  margin-left: 50px;
  font-family: 'PT Sans', sans-serif;
  font-size: 48px;
  color: #004B63;
  `;

const Paragraph = styled.h2`
  color: #7B8786;
  font-size: 35px;
  line-height: 2;
  margin-left: 50px;
  margin-top: -37px;
`;

const AdditionalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-right: 20px;
  margin-top: 50px;
  margin-left: 20px; /* Adjust margin to separate image and text */
`;

const AdditionalText = styled.div`
  flex: 1;
`;

const AdditionalParagraph = styled.p`
  color: #333;
  font-size: 17px;
  line-height: 2;
  margin-left: 18px; /* Adjust margin to separate text from image */
`;

const Landing = () => {
  
  return (
    <>
      <Header />
      <HeroWrapper>
        <HeroContent>
          <HeroImage src={img1} alt="Main Image" />
          <HeroText>
            <Heading>Welcome to Sensory Learn</Heading>
            <Paragraph>
                Education for all
            </Paragraph>
          </HeroText>
        </HeroContent>
        <HeroContent>
          <AdditionalText>
            <AdditionalParagraph>
              Sensory Learn is an inclusive online educational platform committed<br></br> to providing education for all, aligning with the United Nations Sustainability <br></br>Goal No. 4: Quality Education. 
            </AdditionalParagraph>
          </AdditionalText>
          <AdditionalImage src={img2} alt="Second Image" />
        </HeroContent>
      </HeroWrapper>
    </>
  );
};

export default Landing;
