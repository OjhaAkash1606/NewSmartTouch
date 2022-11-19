import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../types';

function* sagaApi() {
  const apiData = yield axios(
    'https://scriptapi.option.local:6003/api/Script/GetNSEDerivativeScripts'
  );

  yield put({ type: types.Post_Api, apiData: apiData.data });
}

function* saga() {
  yield takeEvery(types.Fetch_Api, sagaApi);
}

export default saga;
