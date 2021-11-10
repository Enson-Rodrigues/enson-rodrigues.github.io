import { createStore } from 'redux';
import allReducers from '../reducer';

const myStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    // to enable the chrome extension view
);

export default myStore;