
import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => (
    <Container className="footer" style={{diplay: "flex", bottom: "0px", position: "fixed"}}>
  <footer  >
    <p>This is react sticky footer!!</p>
  </footer>
  </Container>
);
  
export default Footer;