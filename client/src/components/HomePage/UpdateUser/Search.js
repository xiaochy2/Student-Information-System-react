import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";
import { searchUser } from '../../../actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    handleChange(event) {
        this.props.searchUser(event.target.value);
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Col md={2} >
                        <ControlLabel>Search</ControlLabel>
                    </Col>
                    <Col md={4}>
                        <FormControl type="text" value={this.state.value} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        searchUser: (text) => dispatch(searchUser(text))
    })
}

export default connect(null, mapdispatchToProps)(Search);