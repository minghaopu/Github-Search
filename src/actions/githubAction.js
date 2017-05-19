import 'whatwg-fetch';

import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAILURE,
  CHAGE_USER_ID
} from '../constants/actionTypes';

import {
  showSpinner,
  hideSpinner
} from './uiActions';

export const getGihub = (userId = 'roneilPMH') => {
  return (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE});
    dispatch(showSpinner());
    fatch('https://api.github.com/users/' + userId)
      .then((response) => {
        return response.json()
      }).then((jsonData) => {
        dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: jsonData } });
        dispatch(hideSpinner);
      }).catch((response) => {
        dispatch({ type: GET_GITHUB_FAILURE });
      });
  }
}

export const changeUserId = (text) => ({ type: CHAGE_USER_ID, payload: { userId: text } });
