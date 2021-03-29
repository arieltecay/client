import { FETCH_ALL } from "../constants/actionTypes";

const userName = (userName = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return userName;
  }
};
export default userName;
