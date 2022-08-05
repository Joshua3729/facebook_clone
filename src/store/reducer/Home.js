import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
  showCreatePost_modal: false,
  createPostLoading: false,
  post_data: {
    post_caption: "",
    photo_file: null,
  },
  previewPost_photo: null,
  previewImgLoading: false,
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

    case actionTypes.setCreatePostLoading:
      return {
        ...state,
        createPostLoading: action.createPostLoading,
      };
    case actionTypes.setOnEmojiClick:
      return {
        ...state,
        post_data: {
          ...state.post_data,
          post_caption: state.post_data.post_caption + action.emojiObject,
        },
      };
    case actionTypes.OnPost_FileChange:
      return {
        ...state,
        post_data: {
          ...state.post_data,
          photo_file: action.file,
        },
      };
    case actionTypes.setLikeLoading:
      return {
        ...state,
        like_loading: action.like_loading,
      };

    case actionTypes.onPreviewPost_photo_Loading:
      return {
        ...state,
        previewImgLoading: action.previewImgLoading,
      };
    case actionTypes.setPreviewPost_photo:
      return {
        ...state,
        previewPost_photo: action.previewPost_photo,
      };
    default:
      return state;
  }
};

export default reducer;
