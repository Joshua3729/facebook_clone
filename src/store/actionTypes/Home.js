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
export const setOnEmojiClick = (event, emojiObject) => {
  return {
    type: actionTypes.setOnEmojiClick,
    emojiObject: emojiObject.emoji,
  };
};
export const setCreatePostLoading = (createPostLoading) => {
  return {
    type: actionTypes.setCreatePostLoading,
    createPostLoading: createPostLoading,
  };
};

export const ON_CREATE_POST = (e, postData, token) => {
  return (dispatch) => {
    e.preventDefault();
    dispatch(setCreatePostLoading(true));

    fetch("http://localhost:5000/feed/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        caption: postData.post_caption,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to create post.");
        }

        return res.json();
      })
      .then((resData) => {
        dispatch(setCreatePostLoading(false));
        dispatch(setShowCreatePost_Modal(false));
      })
      .catch((err) => console.log(err));
  };
};
export const setLike = (post_id, addLike) => {
  return {
    type: actionTypes.setLike,
    post_id: post_id,
    addLike: addLike,
  };
};
