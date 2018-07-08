import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  LOAD_CALLS_INFO,
  LOAD_CALLS_INFO_SUCCESS,
  LOAD_CALLS_INFO_FAILURE,
  LOAD_STATUS_INFO,
  LOAD_STATUS_INFO_SUCCESS,
  LOAD_STATUS_INFO_FAILURE,
  LOAD_CHAT_INFO,
  LOAD_CHAT_INFO_SUCCESS,
  LOAD_CHAT_INFO_FAILURE,
} from '../Constants/constants';
import mock from '../MockData/Mockdata';

function* fetchChatInfo(action) {
  try {
    const chatData = mock.Chats;
    yield put({ type: LOAD_CHAT_INFO_SUCCESS, chatData });
  } catch (e) {
    yield put({ type: LOAD_CHAT_INFO_FAILURE });
  }
}

function* fetchChatSaga() {
  yield takeLatest(LOAD_CHAT_INFO, fetchChatInfo);
}

function* fetchStatusInfo(action) {
  try {
    const statusData = mock.Status;
    yield put({ type: LOAD_STATUS_INFO_SUCCESS, statusData });
  } catch (e) {
    yield put({ type: LOAD_STATUS_INFO_FAILURE });
  }
}

function* fetchStatusSaga() {
  yield takeLatest(LOAD_STATUS_INFO, fetchStatusInfo);
}

function* fetchCallsInfo(action) {
  try {
    const callsData = mock.Calls;
    yield put({ type: LOAD_CALLS_INFO_SUCCESS, callsData });
  } catch (e) {
    yield put({ type: LOAD_CALLS_INFO_FAILURE });
  }
}

function* fetchCallsSaga() {
  yield takeLatest(LOAD_CALLS_INFO, fetchCallsInfo);
}

export { fetchChatInfo, fetchStatusInfo, fetchCallsInfo  };
export default [fetchChatSaga, fetchStatusSaga, fetchCallsSaga];
