import {createStore, applyMiddleware, compose, combineReducers}  from 'redux';
import {messageReducer} from './messageReducer';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

//use below to combine more than one reducers
export const rootReducer = combineReducers({
  message : messageReducer
});

export const appState = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

