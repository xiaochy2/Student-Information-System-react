import React from 'react';
import { log } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from "react-bootstrap";

class HomePage extends React.Component {
    render(){
        console.log(this.props);
        return (<div>
            <h1>{this.props.location.state.username}</h1>
        </div>

        )
    }
}

export default HomePage;