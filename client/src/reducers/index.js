import { combineReducers } from 'redux';
// import dataList from './Users';
import loginMessage from './loginMessage';
import isLoading from './isLoading';
import loginError from './loginError';

const reducers = combineReducers({
    loginMessage,isLoading,loginError
})

export default reducers;