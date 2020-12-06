import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {productReducer} from './productReducer';

export default combineReducers({
  appState:appReducer,
  productState:productReducer,
  routing
})
