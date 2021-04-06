import React from 'react';
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <Nav>
            <h1>Minhazur Rahaman</h1>
            <Nav.Item>
                <Link to="/" className="nav-link" >HOME</Link>
            </Nav.Item>
            <div className="link-seperator"></div>
            <Nav.Item>
                <Link to="/projects" className="nav-link" >PROJECTS</Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
