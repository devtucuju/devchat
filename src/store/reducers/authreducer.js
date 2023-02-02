import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  USER_SIGN_IN,
  USER_SIGN_IN_FAILED,
  USER_SIGN_OUT,
  CLEAR_LOGIN_ERROR,
  UPDATE_USER_PROFILE,
  USER_NOT_REGISTERED,
  USER_DELETED,
  REQUEST_OTP,
  REQUEST_OTP_SUCCESS,
  REQUEST_OTP_FAILED,
  CHANGE_USER_STATUS,
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  CHANGE_UID,
} from '../types';

const INITIAL_STATE = {
  uid: '',
  name: '',
  email: '',
  password: null,
  status: 0, //0 -> sem verificação 1 -> usuario logado 2 -> usuario não logado
};

export const authreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_USER_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case CHANGE_UID:
      return {
        ...state,
        uid: action.payload.uid,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        info: action.payload,
        loading: false,
        error: {
          flag: false,
          msg: null,
        },
        verificationId: null,
      };
    case USER_NOT_REGISTERED:
      return {
        ...state,
        info: action.payload,
        verificationId: null,
        loading: false,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: {
          flag: true,
          msg: action.payload,
        },
        info: null,
      };
    case USER_SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGN_IN_FAILED:
      return {
        ...state,
        info: null,
        loading: false,
        error: {
          flag: true,
          msg: action.payload,
        },
      };
    case USER_SIGN_OUT:
      return INITIAL_STATE;
    case USER_DELETED:
      return INITIAL_STATE;
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        info: {...state.info, profile: action.payload},
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        verificationId: null,
        error: {
          flag: false,
          msg: null,
        },
        loading: false,
        userType: null,
      };
    case REQUEST_OTP:
      return {
        ...state,
      };
    case REQUEST_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        verificationId: action.payload,
      };
    case REQUEST_OTP_FAILED:
      return {
        ...state,
        loading: false,
        verificationId: null,
        error: {
          flag: true,
          msg: action.payload,
        },
      };
    default:
      return state;
  }
};
