import {combineReducers} from 'redux';

/**
 * App reducer
 * @param {object} [state]
 * @param {object} [action]
 * @returns {{}}
 */
function app(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  app
});
