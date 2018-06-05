import { combineReducers } from 'redux';
// import dataList from './Users';
import loginMessage from './loginMessage';
import isLoading from './isLoading';
import loginError from './loginError';
import role from './role';
import pageRender from './pageRender';

const reducers = combineReducers({
    loginMessage,isLoading,loginError,role,pageRender
})

export default reducers;