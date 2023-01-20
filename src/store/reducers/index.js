import {combineReducers} from 'redux';

import {authreducer as auth} from './authreducer';

const reducers = combineReducers({auth});

export {reducers};
