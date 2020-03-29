import { all, takeLatest } from 'redux-saga/effects';
import { PEOPLE_REQUEST } from '../redux/types';
import API from '../services/Api';
import { getPeople } from './People';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const apiStarWars = API.starWars();

export default function* rootSaga() {
  yield all([
    takeLatest(PEOPLE_REQUEST, getPeople, apiStarWars)
  ]);
}
