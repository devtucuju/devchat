import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducers} from './reducers';

let middleware = [thunk, logger];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

export {store};
