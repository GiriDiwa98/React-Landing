import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './assets/main.css';
function Header() {
    return (
      <Navbar fixed='top' className="slate text-white shadow" expand="lg">
        <div className='container'>
          <Navbar.Brand href="#home" className='text-white'>React Indonesia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className='text-white'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    );
  }
  
  export default Header;