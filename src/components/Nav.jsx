
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navb() {
  return (
      <>
        <Navbar fixed='top' bg="transparent" variant="dark" className='d-flex justify-content-between'>
        <Container>
          <Navbar.Brand href="#home">Atayev</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
  )
}

export default Navb