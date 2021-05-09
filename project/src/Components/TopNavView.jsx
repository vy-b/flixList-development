import React from 'react';
import { Nav, Navbar, Button, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './TopNavView.css'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';
import FlixListLogo from '../Logos/Logo.svg';

class TopNavView extends React.Component {
    signOut = () => {
        this.props.setUsername(undefined)
    }
    render() {
        return (
            <div>
                <Navbar fixed="top" variant="dark" id="topNav">
                    <Navbar.Brand as={Link} to="/">
                        <img src={FlixListLogo} alt="FlixList Logo" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="navElement" as={Link} to="/">Browse</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link className="navElement" as={Link} to="/Search">
                            <FaSearch className="searchIcon" />
                        </Nav.Link>
                        {this.props.username ? <>
                            <DropdownButton id="dropdown-right" menuAlign="right"
                                            title={<FaUser className="profileIcon" />}>
                                <div className="dropdown-content">
                                    <Dropdown.Item as={Link} to="/Profile">
                                            <FaUser className="profileIcon" /> Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={this.signOut} as={Link} to="/Login">
                                            <FaSignOutAlt className="signOutIcon" /> Sign Out
                                    </Dropdown.Item>
                                </div>
                            </DropdownButton>
                            <span style={{marginRight:"2vh"}}/>
                            </> :
                            <>

                                <Nav.Link className="loggedOut" as={Link} to="/Login">Login</Nav.Link>
                                <Button className="loggedOut" as={Link} to="/SignUp" variant="outline-light">Sign Up</Button>
                            </>}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default TopNavView;