import { applyMiddleware, createStore } from "redux";
import { browserHistory, hashHistory } from 'react-router';
import { routerMiddleware, routerReducer } from "react-router-redux";
import createHistory from 'history/createBrowserHistory';
import logger from "redux-logger";
import thunk from "redux-thunk";
// combinedReducers
import reducers from "./reducers";

const history = createHistory();
const middleware = routerMiddleware(history);

export default createStore(reducers, applyMiddleware(middleware, thunk, logger));