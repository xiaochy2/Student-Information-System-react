import React from 'react';
import { Navbar, Nav, NavItem ,NavDropdown, MenuItem} from "react-bootstrap";

class Bar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">SMSYSTEM</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            View Mark
                    </NavItem>
                        {
                            this.props.role > 0 ? <NavItem eventKey={2} href="#">Update Mark</NavItem> : ""
                        }
                        {
                            this.props.role > 1 ? <NavItem eventKey={3} href="#">Update Users</NavItem> : ""
                        }
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Welcome! You are {this.props.role > 0 ? (this.props.role > 1 ? "manager" : "teacher") : "student"}
                        </NavItem>
                        <NavDropdown eventKey={2} title={this.props.username} id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/">logout</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )

    }
}

export default Bar;