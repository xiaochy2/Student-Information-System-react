import React from 'react';
import { connect } from 'react-redux';
import { update, goToPage } from '../../../actions';
import { Row, Button, Form, FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.singleMark._id,
            username: this.props.singleMark.username,
            English: this.props.singleMark.English,
            Math: this.props.singleMark.Math,
            Physics: this.props.singleMark.Physics
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.update(this.state);

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
                                <ControlLabel >{this.state.username}</ControlLabel>
                                
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
    
                                <Button type="submit" bsStyle="success" disabled={this.props.isLoading}>edit</Button>
    
    
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
        singleMark:state.singleMark,
        jumpMessage:state.jumpMessage
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        update: (info) => {
            dispatch({ type: 'ITEMS_IS_LOADING' });
            dispatch(update(info));
        },
        goToPage: () => dispatch(goToPage(2))
    })
}

export default connect(mapstateToProps, mapdispatchToProps)(Edit);