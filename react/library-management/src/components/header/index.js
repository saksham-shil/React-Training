import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/reducers/login';

const Header = () => {
  const token = useSelector (state => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout = () => {
    dispatch(setToken(null));
    navigate ('/login');
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/users-list">Users</Nav.Link>
            <Nav.Link as={Link} to="/books-list">Books</Nav.Link>
            <Nav.Link as={Link} to="/students-list">Students</Nav.Link>
        </Nav>
        <Nav >
          {token && <Nav.Link onClick = {logout}> Logout </Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;