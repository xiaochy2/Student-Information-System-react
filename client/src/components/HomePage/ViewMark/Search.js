import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";
import {search} from '../../../actions';

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
        this.props.search(event.target.value);
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



// const mapstateToProps = state => {
//     return {
//         dataList: state.dataList,
//         // count: state.count,
//         singleData: state.singleData,
//         page_num: state.page_num
//     }
// }

function mapdispatchToProps(dispatch) {
    return ({
        search: (text) => dispatch(search(text))
    })
}

export default connect(null, mapdispatchToProps)(Search);