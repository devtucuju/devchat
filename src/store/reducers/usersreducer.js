import {
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  FETCH_ALL_USERS_STATIC,
  FETCH_ALL_USERS_STATIC_SUCCESS,
  FETCH_ALL_USERS_STATIC_FAILED,
  USER_SIGN_OUT,
} from '../types';

export const INITIAL_STATE = {
  users: [],
  staticusers: null,
  loading: false,
  error: {
    flag: false,
    msg: null,
  },
};

export const usersreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };
    case FETCH_ALL_USERS_FAILED:
      return {
        ...state,
        users: null,
        loading: false,
        error: {
          flag: true,
          msg: action.payload,
        },
      };
    case USER_SIGN_OUT:
      return INITIAL_STATE;
    case FETCH_ALL_USERS_STATIC:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_USERS_STATIC_SUCCESS:
      return {
        ...state,
        staticusers: action.payload,
        loading: false,
      };
    case FETCH_ALL_USERS_STATIC_FAILED:
      return {
        ...state,
        staticusers: null,
        loading: false,
        error: {
          flag: true,
          msg: action.payload,
        },
      };
    default:
      return state;
  }
};
