import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import logger from "redux-logger";

const middlewares = [thunk, logger];

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));
