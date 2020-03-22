import { combineReducers } from 'redux';
import store from 'store2';
import { fromJS } from 'immutable';

import { actionConstants } from './github-actions';

const { GET_REPO } = actionConstants;
const defaultState = fromJS({ data: null, loading: false, error: null });

const repos = (state = defaultState, action) => {
  switch (action.type) {
    case `${GET_REPO}_REQUEST`:
      return state.set('loading', true);

    case `${GET_REPO}_SUCCESS`:
      return fromJS({
        data: action.json.data,
        loading: false,
        error: null,
      });

    case `${GET_REPO}_FAILURE`:
      return defaultState.set('error', action.json.message);

    default:
      return state;
  }
};

export default combineReducers({ repos });
