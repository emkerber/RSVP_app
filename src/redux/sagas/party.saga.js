import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchParty() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // get the ID of the current party from the database
    const response = yield axios.get('/api/party', config); // TODO backend route

    // set current party id to party in the redux store
    yield put({ type: 'SET_PARTY', payload: response.data.id });

  } catch (error) {
    console.log('Error GETting party:', error);
  }
}

function* partySaga() {
  yield takeLatest('FETCH_PARTY', fetchParty);
}

export default partySaga;