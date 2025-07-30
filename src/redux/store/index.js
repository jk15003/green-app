import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from 'red-green-shared-state/reducers/userReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
);

export default store;