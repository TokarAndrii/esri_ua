import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import navigationListReducer from './navigationListReducer';

const rootReducer = combineReducers({
  navigationList: navigationListReducer,
});

const enhancer = composeWithDevTools();

const store = createStore(rootReducer, enhancer);

export default store;
