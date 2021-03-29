import { combineReducers } from "redux";
import products from "./products";
import userName from "./users";

export default combineReducers({
  products,
  userName,
});
