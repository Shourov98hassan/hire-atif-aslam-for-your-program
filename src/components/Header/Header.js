import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logo.jpg';




const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  const logout=()=>{
    signOut(auth);
    navigate('/login')
  }

    return (
        <div>
            <Navbar className='' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container >
  <Navbar.Brand as={Link} to="/">
      <img src={logo} alt="" height={'45px'} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    
    </Nav>
    <Nav>
     
     {
     user ? <button onClick={logout}>Log out</button> :
     <Nav.Link as={Link} to="/login">
       Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
           
        </div>
    );
};

export default Header;