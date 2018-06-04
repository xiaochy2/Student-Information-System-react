import React from 'react';
import { log } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from "react-bootstrap";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.log(this.state);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        if (this.props.loginMessage === "Success!") {
            return <Redirect to={{ pathname: '/home', state: { username: this.state.username, role: this.props.role } }} />;
        }
        return (
            <Col md={4} mdOffset={4}>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <h3 className="text-center">Student Management System</h3>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel >Username:</ControlLabel>
                        </Col>
                        <Col md={10}>
                            <FormControl type="text" maxLength="10" required="required" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter username" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel >Password:</ControlLabel>
                        </Col>
                        <Col md={10}>
                            <FormControl type="password" maxLength="10" required="required" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <p className="text-center">{this.props.loginMessage}</p>
                        <Col mdOffset={5} md={4}>

                            <Button type="submit" bsStyle="primary" disabled={this.props.isLoading}>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        );
    }
}
const mapstateToProps = state => {
    return {
        loginMessage: state.loginMessage,
        role: state.role,
        loginError: state.loginError,
        isLoading: state.isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return ({
        log: (info) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(log(info));
        }
    })
};

export default connect(mapstateToProps, mapDispatchToProps)(LoginPage);