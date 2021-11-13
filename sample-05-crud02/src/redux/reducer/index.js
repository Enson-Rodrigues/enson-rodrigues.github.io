import contactReducer from "./contactReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    contactArrayList: contactReducer
})

export default allReducers;