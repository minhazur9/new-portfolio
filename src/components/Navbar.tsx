import React from 'react';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <Nav>
            <h1>Minhazur Rahaman</h1>
            <Nav.Item>
                <Nav.Link href="/" id="home-link" >HOME</Nav.Link>
            </Nav.Item>
                <div className="link-seperator"></div>
            <Nav.Item>
                <Nav.Link href="/projects">PROJECTS</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
