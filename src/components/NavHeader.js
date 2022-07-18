import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../media/logo.svg'
import '../css/NavHeader.css'

function NavHeader() {

    return (
        <Navbar sticky='top' bg="light" variant='light' expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="custom-logo"
                    alt='logo'
                />
                StudyTimer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#rewards">Rewards</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}

export default NavHeader;