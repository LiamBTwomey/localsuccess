import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand style={{fontFamily: 'Impact', fontSize: 'xx-large'}} href="#home"><i>Liam B. Twomey</i></Navbar.Brand>
           <Nav className="me-auto">
            <Nav.Link className="pb-0" style={{color: 'lightGrey', marginBottom: "0px"}} disabled>ReactJS Developer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;