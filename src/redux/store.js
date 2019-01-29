import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import navigationListReducer from './navigationListReducer';
import actualNewsReducer from '../pages/actual-news-page/duck/actualNewsReducer';
import isLoadingreducer from '../pages/actual-news-page/duck/isLoadingreducer';
import errorReducer from './errorReducer';
import carouselImagesReducer from './carouselImagesReducer';

const rootReducer = combineReducers({
  navigationList: navigationListReducer,
  actualNews: actualNewsReducer,
  isLoading: isLoadingreducer,
  isError: errorReducer,
  carouselImages: carouselImagesReducer,
});

const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
