import * as actionTypes from "../actionTypes/actionTypes";

export const setPosts = (posts) => {
  return {
    type: actionTypes.SET_POSTS,
    posts: posts,
  };
};

export const initPosts = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/feed/get_posts")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts.");
        }

        return res.json();
      })
      .then((resData) => {
        dispatch(setPosts(resData.data));
      })
      .catch((err) => console.log(err));
  };
};
export const getNewPost = (post) => {
  return {
    type: actionTypes.GET_NEW_POST,
    post: post,
  };
};

export const setShowCreatePost_Modal = (show) => {
  return {
    type: actionTypes.setShowCreatePost_Modal,
    showCreatePost_modal: show,
  };
};
export const setPostCaption = (post_caption) => {
  return {
    type: actionTypes.setPostCaption,
    post_caption: post_caption,
  };
};
export const setCreatePostLoading = () => {
  return {
    type: actionTypes.setCreatePostLoading,
    createPostLoading: createPostLoading,
  };
};
export const ON_CREATE_POST = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/feed/get_posts")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts.");
        }

        return res.json();
      })
      .then((resData) => {
        dispatch(setPosts(resData.data));
      })
      .catch((err) => console.log(err));
  };
};
