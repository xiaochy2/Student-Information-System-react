import React from 'react';
import { connect } from 'react-redux';
import { createUser, goToPage } from '../../../actions';
import { Row, Button, Form, FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            password_re: "",
            role: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.createUser(this.state);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        if (this.props.jumpMessage) {
            this.props.goToPage();
            return null;
        } else {
            return (
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <ControlLabel>username</ControlLabel>
                                <FormControl name="username" type="text" maxLength="10" required="required" value={this.state.username} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>password</ControlLabel>
                                <FormControl name="password" type="password" maxLength="10" required="required" value={this.state.password} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>repeat</ControlLabel>
                                <FormControl name="password_re" type="password" maxLength="10" required="required" value={this.state.password_re} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Role</ControlLabel>
                                <FormControl name="role" componentClass="select" required onChange={this.handleChange}>
                                    <option value="">Select</option>
                                    <option value="0">Student</option>
                                    <option value="1">Teacher</option>
                                    
                                </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <p>{this.props.markError}</p>
                                <Button type="submit" bsStyle="success" disabled={this.props.isLoading||(this.state.password_re!==this.state.password)}>create</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            );
        }

    }
}

const mapstateToProps = state => {
    return {
        isLoading: state.isLoading,
        markError: state.markError,
        jumpMessage: state.jumpMessage
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        createUser: (info) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(createUser(info));
        },
        goToPage: () => dispatch(goToPage(3))
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(CreateUser);