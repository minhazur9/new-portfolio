import React from 'react';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <Nav>
            <h1>Minhazur Rahaman</h1>
            <Nav.Item>
                <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects">PROJECTS</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
