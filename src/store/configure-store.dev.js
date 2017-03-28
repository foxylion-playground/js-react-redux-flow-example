// @flow

import rootReducer from '../reducers';
import { createStore } from 'redux';

import { compose } from 'redux';
import { persistState } from 'redux-devtools';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default (initialState: ?{}) => {
  const enhancer = compose(
    devToolsEnhancer(),
    persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
  );
  return createStore(rootReducer, initialState, enhancer);
};
