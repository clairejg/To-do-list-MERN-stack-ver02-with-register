import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from "react-bootstrap";
// import './NavBar.css'
// import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (

    
        <Navbar  bg="dark" expand="lg" variant="dark">
            <Container>
            {/* <Navbar expand="lg" variant="light" bg="light"></Navbar> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Navbar.Brand href="/todo2">Todo App</Navbar.Brand>
                    {/* title of app */}

                    {/* <div className="MenuNavRightEnd"> */}
                        <Nav className="me-auto">
                        <Nav.Link href="/todo">MainTodo</Nav.Link>
                        <Nav.Link href="/todo2">Todo2</Nav.Link>
                        </Nav>  
                
                    {/* </div> */}
                    {/* </Nav> */}
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
 
    );
  };
  export default NavBar;