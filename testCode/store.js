import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
// combinedReducers
import reducer from "./reducers";

// const middleware = applyMiddleware(promise, thunk, logger;
const middleware = applyMiddleware(thunk, logger);
export default createStore(reducer, middleware);

// const logger = (store) => (next) => (action) => {
//   console.log("action fired", action);
//   next(action);
// }

