import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
  showCreatePost_modal: false,
  createPostLoading: false,
  post_data: {
    post_caption: "",
    photo_file: null,
  },

  like_loading: false,
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
    case actionTypes.setPostCaption:
      return {
        ...state,
        post_data: {
          ...state.post_data,
          post_caption: action.post_caption,
        },
      };
    case actionTypes.uploadImgFile:
      return {
        ...state,
        post_data: {
          ...state.post_data,
          photo_file: action.photo_file,
        },
      };

    case actionTypes.setCreatePostLoading:
      return {
        ...state,
        createPostLoading: action.createPostLoading,
      };
    case actionTypes.setOnEmojiClick:
      return {
        ...state,
        post_data: {
          post_caption: state.post_data.post_caption + action.emojiObject,
        },
      };

    case actionTypes.setLikeLoading:
      return {
        ...state,
        like_loading: action.like_loading,
      };
    default:
      return state;
  }
};

export default reducer;
