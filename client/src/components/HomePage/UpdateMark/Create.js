import React from 'react';
import { connect } from 'react-redux';
import { create, goToPage } from '../../../actions';
import { Row, Button, Form, FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            username: "",
            English: "",
            Math: "",
            Physics: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.create(this.state);

    } 

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        if(this.props.jumpMessage){
            this.props.goToPage();
            return null;
        }else{
            return (
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <ControlLabel>username</ControlLabel>
                                <FormControl name="username" type="text" value={this.state.username} onChange={this.handleChange} />                                
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>English</ControlLabel>
                                <FormControl name="English" type="number" min="0" max="100" value={this.state.English} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Math</ControlLabel>
                                <FormControl name="Math" type="number" min="0" max="100" value={this.state.Math} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Physics</ControlLabel>
                                <FormControl name="Physics" type="number" min="0" max="100" value={this.state.Physics} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                            <p>{this.props.markError}</p>
                                <Button type="submit" bsStyle="success" disabled={this.props.isLoading}>create</Button>
    
    
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
        jumpMessage:state.jumpMessage
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        create: (info) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(create(info));
        },
        goToPage: () => dispatch(goToPage(2))
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(Create);