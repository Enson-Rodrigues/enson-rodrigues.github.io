import { all, put, call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from "../actions/actionTypes";
import { setContactList, updateContactListState, errorStatus, deleteContactItemState } from "../actions"
import { getContacts, addContactDetails, deleteContactDetails } from "./request"

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
    const response = yield call(addContactDetails, action.payload);
    const data = yield response.data;
    yield put(updateContactListState(data));
  } catch (e) {
    console.error(e.message);
    yield put(errorStatus(e.message));
  }
}

export function* deleteContactInList(action) {
  try {
    const response = yield call(deleteContactDetails, action.payload);
    const status = yield response.status;
    if(status == 200) {
      yield put(deleteContactItemState(action.payload));
    }
    
  } catch (e) {
    console.error(e.message);
    yield put(errorStatus(e.message));
  }
}

export function* loadContactList() {
  yield takeLatest( ActionTypes.Get_Contact_List, fetchContactList);
  yield takeLatest( ActionTypes.Update_Contact_List, addContactInList);
  yield takeLatest( ActionTypes.Delete_Contact_Item_API, deleteContactInList);
}

export default function* rootSaga() {
  yield all([loadContactList()]);
}