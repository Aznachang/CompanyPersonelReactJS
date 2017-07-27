import { applyMiddleware, createStore, compose } from "redux";
import { browserHistory, hashHistory } from 'react-router';
import { routerMiddleware, syncHistory } from "react-router-redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
// combinedReducers
import reducer from "./reducers";

const middleware = applyMiddleware(thunk, logger);
// const middleware = applyMiddleware(syncHistory(browserHistory));
export default createStore(reducer, middleware);
