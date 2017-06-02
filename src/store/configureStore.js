import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = immutable.Map();
const logger = createLogger();

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk, logger)
);
