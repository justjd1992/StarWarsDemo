import {
  PEOPLE_REQUEST,
  PEOPLE_SUCCESS,
  PEOPLE_FAILURE
} from '../types';
  
export const getPeople = payload => ({
  type: PEOPLE_REQUEST,
  payload
});
  
export const getPeopleSuccess = payload => ({
  type: PEOPLE_SUCCESS,
  payload
});
  
export const getPeopleFailure = payload => ({
  type: PEOPLE_FAILURE,
  payload
});
  
