import 'whatwg-fetch';
import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAILURE,
  CHAGE_USER_ID,
} from '../constants/actionTypes';

import {
  showSpinner,
  hideSpinner,
} from './uiActions';

export const getGithub = (userId = 'roneilPMH') => (
   (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE});
    dispatch(showSpinner());
    fetch('https://api.github.com/users/roneilPMH')
      .then(response => response.json())
      .then((jsonData) => {
        dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: jsonData } });
        dispatch(hideSpinner());
      })
      .catch(() => dispatch({ type: GET_GITHUB_FAILURE })
      );
  }
);

export const changeUserId = text => ({ type: CHAGE_USER_ID, payload: { userId: text } });
