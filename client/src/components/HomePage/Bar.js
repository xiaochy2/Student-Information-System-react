import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem ,NavDropdown, MenuItem} from "react-bootstrap";
import {goToPage} from '../../actions';


class Bar extends React.Component {
    constructor(props){
        super(props);
        this.changeTag = this.changeTag.bind(this); 
    }
    changeTag(num){
        // console.log(num);
        this.props.goToPage(num);
    }
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>SMSYSTEM</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} onClick = {()=>this.changeTag(1)}>
                            View Mark
                    </NavItem>
                        {
                            this.props.role > 0 ? <NavItem eventKey={2} onClick = {()=>this.changeTag(2)}>Update Mark</NavItem> : ""
                        }
                        {
                            this.props.role > 1 ? <NavItem eventKey={3} onClick = {()=>this.changeTag(3)}>Update Users</NavItem> : ""
                        }
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Welcome! You are {this.props.role > 0 ? (this.props.role > 1 ? "admin" : "teacher") : "student"}
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


// const mapstateToProps = state => {
//     return {
//         pageRender: state.pageRender,
//     }
// }
function mapDispatchToProps(dispatch) {
    return ({
        goToPage: (num) => dispatch(goToPage(num))
    })
};

export default connect(null, mapDispatchToProps)(Bar);