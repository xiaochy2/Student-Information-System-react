import React from "react";
import { connect } from 'react-redux';
import { Col,Button, Form, FormGroup, ControlLabel } from "react-bootstrap";
import {prev,next} from "../../../actions";

class Page extends React.Component {
    prev = () => {
        // console.log("prev page");
        this.props.prev();
    }

    next = () => {
        // console.log("next page");
        this.props.next();
    }
    render() {
        return (<Col mdOffset={4}>
        <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
                <Button onClick={() => this.prev()} bsStyle="info" disabled = {this.props.page_num === 1}>Prev Page</Button>
                <ControlLabel>{this.props.page_num}/{parseInt(((this.props.length - 1) / 5 + 1),10)}</ControlLabel>
                <Button onClick={() => this.next()} bsStyle="info" disabled = {this.props.page_num * 5 >= this.props.length}>Next Page</Button>
            </FormGroup>
        </Form>
        </Col>

        )
    }
}

function mapdispatchToProps(dispatch) {
    return ({
        prev: () => dispatch(prev()),
        next: () => dispatch(next())
    })
}

export default connect(null, mapdispatchToProps)(Page);