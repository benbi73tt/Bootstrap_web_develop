import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function NaviBar() {
        return (
        <>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' >
                    <Navbar.Brand>WebDev blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navber-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant='primary' className='mr-2'>Log in</Button>
                            <Button variant='primary' className='mr-2'>Log in</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }