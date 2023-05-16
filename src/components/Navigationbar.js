import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Navigationbar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Song App</Navbar.Brand>
        </LinkContainer>
        <Nav className='me-auto'>
        <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/songs'>
            <Nav.Link>Songs</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/artists'>
            <Nav.Link>Artists</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
