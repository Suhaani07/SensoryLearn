import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <p>&copy; 2024 Your Brand Name. All rights reserved.</p> */}
    </FooterWrapper>
  );
};

export default Footer;
