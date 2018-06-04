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
                    <Route exact path="/home" component={HomePage} />
                </Switch>
            </BrowserRouter>
            
        )
    }
}
export default SMSApp;

// const mapstateToProps = state => {
//     return {
//         dataList: state.dataList,
//         // count: state.count,
//         singleData: state.singleData,
//         page_num: state.page_num
//     }
// }

// function mapdispatchToProps(dispatch) {
//     return ({
//         add: (singleData) => dispatch(action.add(singleData)),
//         update: (singleData) => dispatch(action.update(singleData)),
//         editing: (singleData) => dispatch(action.editing(singleData)),
//         search: (text) => dispatch(action.search(text)),
//         del: (id) => dispatch(action.del(id)),
//         sort: (tag) => dispatch(action.sort(tag)),
//         getInfo: () => dispatch(action.getInfo()),
//         prev: () => dispatch(action.prev()),
//         next: () => dispatch(action.next())
//     })
// }

// export default connect(mapstateToProps, mapdi
// const mapstateToProps = state => {
//     return {
//         dataList: state.dataList,
//         // count: state.count,
//         singleData: state.singleData,
//         page_num: state.page_num
//     }
// }

// function mapdispatchToProps(dispatch) {
//     return ({
//         add: (singleData) => dispatch(action.add(singleData)),
//         update: (singleData) => dispatch(action.update(singleData)),
//         editing: (singleData) => dispatch(action.editing(singleData)),
//         search: (text) => dispatch(action.search(text)),
//         del: (id) => dispatch(action.del(id)),
//         sort: (tag) => dispatch(action.sort(tag)),
//         getInfo: () => dispatch(action.getInfo()),
//         prev: () => dispatch(action.prev()),
//         next: () => dispatch(action.next())
//     })
// }

// export default connect(mapstateToProps, mapdispatchToProps)(UserListApp);