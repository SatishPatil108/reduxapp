import { applyMiddleware, legacy_createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";


export const store = legacy_createStore(reducers, {}, applyMiddleware(thunk))