import { combineReducers } from 'redux';
// import dataList from './Users';
import loginMessage from './loginMessage';
import isLoading from './isLoading';
import loginError from './loginError';
import role from './role';
import pageRender from './pageRender';
import dataList from './dataList';
import page_num from './Page_num';
import singleMark from './SingleMark';
import jumpMessage from './jumpMessage';
import markError from './markError';


import userList from './userList';

import singleUser from './SingleUser';



const reducers = combineReducers({
    loginMessage,isLoading,loginError,role,pageRender,dataList,page_num,singleMark,jumpMessage,singleUser,userList,markError
})

export default reducers;