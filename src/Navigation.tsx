import { AmplifySignOut } from '@aws-amplify/ui-react'
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" className="p-0">
            <Navbar.Brand href="#home" className="mx-1">Process Automation Tool</Navbar.Brand>
            <Nav className="me-auto">
                <Link to="/" className="nav-link align-self-center">Home</Link>
                <Link to="/steps" className="nav-link align-self-center">Steps</Link>
                <Link to="/templates" className="nav-link align-self-center">Templates</Link>
                <div className="m-1">
                    <AmplifySignOut />
                </div>
            </Nav>
        </Navbar>
    )
}

export default Navigation