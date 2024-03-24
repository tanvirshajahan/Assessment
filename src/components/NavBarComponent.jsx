import React, { Component } from 'react'
import { Navbar, Form, Button, Nav, Container, Offcanvas } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AddTwoNumbers from './AddTwoNumbers';
import InputArray from './InputArray';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar expand={ 'sm'} className={`${this.props.isMobile?'sidebar':'topbar'}`}>
                        <Container fluid>
                            <Navbar.Brand>AEON</Navbar.Brand>
                            <Navbar.Toggle  />
                            <Navbar.Offcanvas placement="start">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title style={{color:'blue'}}>
                                        AEON
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                
                                    <Nav.Link className="nav-link" href="/add">Add Two</Nav.Link>
                                    <Nav.Link className="nav-link" href="/inputArray">Input</Nav.Link>
                                    <Nav.Link href="">Showcase</Nav.Link>
                                    <Nav.Link href="">Doc</Nav.Link>
                                    <Nav.Link href="">Blog</Nav.Link>
                                    <Nav.Link href="">Analytics</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/add">
                            <AddTwoNumbers />
                        </Route>
                        <Route path="/inputArray">
                            <InputArray />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}