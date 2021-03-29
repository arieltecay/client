import { FETCH_ALL } from "../constants/actionTypes";

const products = (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return products;
  }
};
export default products;
