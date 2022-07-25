import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
  showCreatePost_modal: false,
};
const reducer = (state = initialState, action) => {
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
    case actionTypes.setShowCreatePost_Modal:
      return {
        ...state,
        showCreatePost_modal: action.showCreatePost_modal,
      };
    default:
      return state;
  }
};

export default reducer;
