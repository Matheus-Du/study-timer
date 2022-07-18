import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/logo.svg'
import '../css/NavHeader.css'

function NavHeader() {

    return (
        <Navbar sticky='top' className='navbar'>
            <Navbar.Brand href="#home" className='name'>
                <img
                    src={logo}
                    className="logo"
                    alt='logo'
                />
                StudyTimer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="#rewards" className='nav-link'>Rewards</Nav.Link>
                <Nav.Link href="#about" className='nav-link'>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}

export default NavHeader;