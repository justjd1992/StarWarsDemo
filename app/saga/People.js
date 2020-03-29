import { call, put } from 'redux-saga/effects';
import { getPeopleSuccess, getPeopleFailure } from '../redux/actions/People';
import { getError } from '../services/Utils';

function* handleSuccess(response) {
  console.log('RESPONSE:: ',response);
  yield put(getPeopleSuccess(response));
}

export function* getPeople(api, action) {
  const payload = action?.payload && action.payload;
  
  const response = yield call(api.people, payload);

  console.log('response: ',response.data.results);

  if (response?.status === 200) {
    yield* handleSuccess(response.data.results);
  } else {
    const error = yield call(getError, response.data);
    yield put(getPeopleFailure(error));
  }
}
