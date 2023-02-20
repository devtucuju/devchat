import {combineReducers} from 'redux';

import {authreducer as auth} from './authreducer';
import {chatreducer as chatdata} from './chatreducer';
import {usersreducer as userdata} from './usersreducer';

const reducers = combineReducers({auth, chatdata, userdata});

export {reducers};
