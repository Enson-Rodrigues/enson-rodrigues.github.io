import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    Counter: counterReducer,
    LoggedType: loggedReducer
})

export default allReducers;