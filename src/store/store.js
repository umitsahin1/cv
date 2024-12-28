import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { themeReducer, languageReducer, dataReducer } from "./reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  data: dataReducer,
});

const mystore = createStore(rootReducer, applyMiddleware(thunk));

export default mystore;
