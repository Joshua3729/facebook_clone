import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
  showCreatePost_modal: false,
  post_data: {
    post_caption: "",
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
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
    case actionTypes.ON_CREATE_POST:
      return {
        ...state,
        post_data: {
          post_caption: action.post_caption,
        },
      };
    default:
      return state;
  }
};

export default reducer;
