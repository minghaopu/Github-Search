import { handleActions } from 'redux-actions';
import { GithubState } from '../../constants/models';

import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAILURE,
  CHAGE_USER_ID
} from '../../constants/actionTypes';

const githubReducers = handleActions({
  GET_GITHUB_SUCCESS: (state, { payload }) => (
    state.merge({
      'data': payload.data,
    })
  ),
  CHAGE_USER_ID: (state, { payloard }) => (
    state.merget({
      'userId': payload
    })
  )
}, GithubState);

export default githubReducers;
