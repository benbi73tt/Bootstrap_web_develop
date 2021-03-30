import React, {useState} from 'react';
import {Navbar, Nav, Button, Container, Modal, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import styled from 'styled-components'; //npm install --save styled-components

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link{
        color:#adb1b8;
        &:hover{
            color: white

        }
    }
`



export default function NaviBar() {

    const [show,setShow] = useState(false);

    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);


        return (
        <>
        <Styles>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' >
                    <Container>
                    <Navbar.Brand>WebDev blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navber-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant='primary' className='mr-2' onClick={handleShow}>Log in</Button>
                            <Button variant='primary' onClick={handleShow}>Log in</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Styles>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId='fromBasicEmail'>
                                <Form.Label>Email Adress</Form.Label>
                                <Form.Control type='email' placeholder='Enter Email'/>
                                <Form.Text className='text-muted'>We'll never share your email with</Form.Text>
                            </Form.Group>
                            <Form.Group controlId='fromBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='Password' placeholder='Enter Password'/>
                            </Form.Group>
                            <Form.Group controlId='fromBasicCheckbox'>
                                
                                <Form.Check type='checkbox' label='Remember me'/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }