import { all, put, call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from "../actions/actionTypes";
import { setContactList, setAddContactList, getAddContactList, errorStatus } from "../actions"
import { getContacts, addContactDetails } from "./request"

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

export function* addContactInList(action) {
  try {
    const response = yield call(addContactDetails(action.payload));
    const data = yield response.data;
    yield put(setAddContactList(data));
  } catch (e) {
    console.error(e.message);
    //yield put(errorStatus(e.message));
  }
}

export function* loadContactList() {
  yield takeLatest( ActionTypes.Get_Contact_List, fetchContactList);
  yield takeLatest( ActionTypes.Set_AddContact_List, addContactInList);
}

export default function* rootSaga() {
  yield all([loadContactList()]);
}