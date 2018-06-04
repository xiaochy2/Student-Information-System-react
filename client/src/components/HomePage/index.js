import React from 'react';
import { Redirect,BrowserRouter,Switch,Route } from 'react-router-dom';
import Bar from './Bar';
import ViewMark from './ViewMark';
import UpdateMark from './UpdateMark';
import UpdateUser from './UpdateUser';


class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: this.props.location.state.username
    //     }
    // }
    render() {
        if (this.props.location.state === undefined) {
            return <Redirect to={{ pathname: '/' }} />;
        }
        return (<div>
            <Bar username={this.props.location.state.username} role={this.props.location.state.role} />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/viewMark" component={ViewMark} />
                    <Route exact path="/updateMark" component={UpdateMark} />
                    <Route exact path="/updateUser" component={UpdateUser} />
                </Switch>
            </BrowserRouter>
            </div>
        )
    }
}

export default HomePage;