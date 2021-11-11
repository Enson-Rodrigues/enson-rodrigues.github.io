import { createStore, compose, applyMiddleware  } from 'redux';
import allReducers from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const myStore = createStore(
    allReducers,
    compose(
        applyMiddleware(sagaMiddleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    // to enable the chrome extension view
);
sagaMiddleware.run(rootSaga);

export default myStore;