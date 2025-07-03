import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/books-list">Books</Nav.Link>
            <Nav.Link as={Link} to="/students-list">Students</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;