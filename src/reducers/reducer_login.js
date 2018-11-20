import Promise from "es6-promise";
import { resolve } from "path";
const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

function setLoginPending(isLoginPending) {
  return {
    type: LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(LoginError) {
  return {
    type: LOGIN_ERROR,
    LoginError
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    sendLoginRequest(email, password)
      .then(success => {
        console.log(success);
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
      })
      .catch(err => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err));
      });
  };
}

export default function reducer(
  state = {
    isLoginPending: false,
    isLoginSuccess: false,
    LoginError: null
  },
  action
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess
      };
    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending
      };
    case LOGIN_ERROR:
      return {
        ...state,
        LoginError: action.LoginError
      };
    default:
      return state;
  }
}

function sendLoginRequest(email, password) {
  return new Promise((resolve, reject) => {
    if (email === "admin" && password === "admin") {
      return resolve(true);
    } else {
      return reject(new Error("invalid email or password"));
    }
  });
}
