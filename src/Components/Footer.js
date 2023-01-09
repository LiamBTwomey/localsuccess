import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from './public/LiamBTwomeyLogo_1.jpg';

const Footer = () => (
    <Container style={{bottom: "0px", position: "fixed", maxWidth: "100%", backgroundColor: "black", color: "white", fontSize: 'x-small', fontFamily: 'Impact'}}>
  <footer >
    <img src={ logo } width={23} alt="Liam B. Twomey logo"  />
  </footer>
  </Container>
);
  
export default Footer;