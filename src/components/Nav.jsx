import React from 'react';
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap';
import DrawerToggleBtn from './DrawerToggleBtn.js';
import './nav.css';


const NavigationBar = () => {

  return (
    <div>
    <Navbar className="navbar-custom ">
    <DrawerToggleBtn />
      <Navbar.Brand href="/">Dimmagios</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="">Menus</Nav.Link>
        <Nav.Link href="">Photos</Nav.Link>
        <Nav.Link href="">Vist Us</Nav.Link>
        <Nav.Link href="">News / Reviews</Nav.Link>
      </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
    </div>
  )
}

export default NavigationBar;
