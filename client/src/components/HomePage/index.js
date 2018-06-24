import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Bar from './Bar';
import ViewMark from './ViewMark';
import UpdateMark from './UpdateMark';
import UpdateUser from './UpdateUser';
import Create from './UpdateMark/Create';
import Edit from './UpdateMark/Edit';
import CreateUser from './UpdateUser/Create';
import EditUser from './UpdateUser/Edit';

function Condition(props) {
    if (props.pageRender === 1) {
        return <ViewMark />;
    } else if (props.pageRender === 2) {
        return <UpdateMark />;
    } else if (props.pageRender === 3) {
        return <UpdateUser />;
    } else if (props.pageRender === 4) {
        return <Create />;
    } else if (props.pageRender === 5) {
        return <Edit />;
    } else if (props.pageRender === 6) {
        return <CreateUser />;
    } else if (props.pageRender === 7) {
        return <EditUser />;
    } 
}

class HomePage extends React.Component {
    render() {
        if (this.props.location.state === undefined) {
            return <Redirect to={{ pathname: '/' }} />;
        }
        return (<div>
            <Bar username={this.props.location.state.username} role={this.props.location.state.role} />
            <Condition pageRender={this.props.pageRender} />
        </div>
        )
    }
}

const mapstateToProps = state => {
    return {
        pageRender: state.pageRender,
    }
}


export default connect(mapstateToProps)(HomePage);