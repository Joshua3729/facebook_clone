import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  Auth: false,
  token: null,
  user_data: {
    user_id: null,
    fullname: null,
    profile_url: null,
  },
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        posts: action.posts,
      };
    case actionTypes.GET_NEW_POST:
      return {
        ...state,
        posts: [...action.post, ...state.posts],
      };
    default:
      return state;
  }
};

export default authReducer;
