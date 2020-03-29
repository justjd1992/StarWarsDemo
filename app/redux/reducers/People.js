import { PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE } from '../types';
import Reduxer, { immutableMerge } from '../Reduxer';

export const INITIAL_STATE = Object.freeze({
  fetching: false,
  people: [],
  error: null
});

const request = (state) =>
  immutableMerge(state, {
    fetching: true,
    error: null,
    people: []
  });

const success = (state, action) =>
  immutableMerge(state, {
    fetching: false,
    error: null,
    people: action.payload
  });

const failure = (state, action) =>
  immutableMerge(state, {
    fetching: false,
    error: action.payload
  });

export default Reduxer(INITIAL_STATE, {
  [PEOPLE_REQUEST]: request,
  [PEOPLE_SUCCESS]: success,
  [PEOPLE_FAILURE]: failure
});
