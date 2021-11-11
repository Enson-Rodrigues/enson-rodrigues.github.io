import { all, put, call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from "../actions/actionTypes";
import { setContactList, errorStatus } from "../actions"
import { getContacts } from "./request"

export function* fetchContactList() {

  try {
    const response = yield call(getContacts);
    const data = yield response.data;
    yield put(setContactList(data));

  } catch (e) {
    console.error(e.message);
    yield put(errorStatus(e.message));

  }
}

export function* loadContactList() {
  yield takeLatest( ActionTypes.Get_Contact_List, fetchContactList);
}

export default function* rootSaga() {
  yield all([loadContactList()]);
}