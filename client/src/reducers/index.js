import { combineReducers } from 'redux';
// import dataList from './Users';
import loginMessage from './loginMessage';
import isLoading from './isLoading';
import loginError from './loginError';
import role from './role';

const reducers = combineReducers({
    loginMessage,isLoading,loginError,role
})

export default reducers;