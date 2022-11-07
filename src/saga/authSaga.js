import { put, takeEvery, call } from "redux-saga/effects";
import api from "../api";
import { TOKEN } from "../constants";
import { MessageType, showMessage } from "../utils/showError";
import {
  LOGIN,
  AUTHORIZE,
  REGISTRATION,
  setUserAC,
  logOutAC,
} from "./../store/reducers/userReducer";

// WORKERS
function* autorizeUserWorker() {
  const response = yield call(api.authorize);
  if (response.status === 200 && response.data.token) {
    yield put(setUserAC(response.data));
    yield localStorage.setItem(TOKEN, response.data.token);
  } else {
    // TODO: Add logic for check token date expiration
    yield put(logOutAC());
  }
}

function* loginUserWorker(action) {
  const response = yield call(api.login, action.payload);
  if (response.status === 200 && response.data.token) {
    yield put(setUserAC(response.data));
    yield localStorage.setItem(TOKEN, response.data.token);
    showMessage(MessageType.success, "Welcome back");
  } else {
  }
}

function* registerUserWorker(action) {
  const response = yield call(api.registration, action.payload);
  if (response.status === 200) {
    const loginResponse = yield call(api.login, action.payload);
    yield localStorage.setItem(TOKEN, loginResponse.data.token);
    yield put(setUserAC(loginResponse.data));
    showMessage(MessageType.success, "Welcome");
  } else {
    console.log(response.message);
  }
}

// WATCHER
export function* authSaga() {
  yield takeEvery(AUTHORIZE, autorizeUserWorker);
  yield takeEvery(LOGIN, loginUserWorker);
  yield takeEvery(REGISTRATION, registerUserWorker);
}
