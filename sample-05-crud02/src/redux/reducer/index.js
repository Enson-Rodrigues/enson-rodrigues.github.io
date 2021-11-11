import contactReducer from "./contactReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    Contact: contactReducer
})

export default allReducers;