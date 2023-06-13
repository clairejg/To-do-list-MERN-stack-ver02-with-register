import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (

        <Navbar  bg="dark" expand="lg" variant="dark">
            <Container>
                    <Navbar.Brand href="/todo2">Todo App</Navbar.Brand>
                    {/* title of app */}
                        <Nav className="me-auto">
                        <Nav.Link href="/todo">MainTodo</Nav.Link>
                        <Nav.Link href="/todo2">Todo2</Nav.Link>
                        </Nav>  
            </Container>
        </Navbar>
 
    );
  };
  export default NavBar;