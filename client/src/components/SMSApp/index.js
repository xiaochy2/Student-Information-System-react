import React from "react";
// import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
// import * as action from '../../actions';

class SMSApp extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/home" component={HomePage} />
                </Switch>
            </BrowserRouter>
            
        )
    }
}
export default SMSApp;