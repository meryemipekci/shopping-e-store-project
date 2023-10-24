import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./reducers/productReducer";
import { basketReducer } from "./reducers/basketReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  basketReducer,
  productReducer,
});
// storu olusturma ve export etme
export default createStore(rootReducer, applyMiddleware(thunk));
