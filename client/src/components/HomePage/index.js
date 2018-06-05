import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Bar from './Bar';
import ViewMark from './ViewMark';
import UpdateMark from './UpdateMark';
import UpdateUser from './UpdateUser';

function Condition(props) {
    if (props.pageRender === 1) {
        return <ViewMark />;
    } else if (props.pageRender === 2) {
        return <UpdateMark />;
    } else if (props.pageRender === 3) {
        return <UpdateUser />;
    }
}

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
// function mapDispatchToProps(dispatch) {
//     return ({
//         log: (info) => {
//             dispatch({ type: 'ITEMS_IS_LOADING' });
//             dispatch(log(info));
//         }
//     })
// };

export default connect(mapstateToProps)(HomePage);