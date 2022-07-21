import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default reducer;
