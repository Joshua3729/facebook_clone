import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETSTATE:

    default:
      return state;
  }
};

export default reducer;
