import * as actionTypes from "../actionTypes/actionTypes";

export const setPosts = (posts) => {
  return {
    type: actionTypes.SET_POSTS,
    posts: posts,
  };
};

export const initPosts = (token) => {
  return (dispatch) => {
    fetch("http://localhost:5000/feed/get_posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
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
export const setUploadImgFile = (photo_file) => {
  return {
    type: actionTypes.uploadImgFile,
    photo_file: photo_file,
  };
};
export const setPreviewPost_photo = (previewPost_photo) => {
  return {
    type: actionTypes.setPreviewPost_photo,
    previewPost_photo: previewPost_photo,
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

export const ON_CREATE_POST = (e, postData, token, profile_img = null) => {
  return (dispatch) => {
    e.preventDefault();
    dispatch(setCreatePostLoading(true));
    const formData = new FormData();
    formData.append("post_image", profile_img);
    formData.append("caption", postData.post_caption);

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

export const setLikeLoading = (loading) => {
  return {
    type: actionTypes.setLikeLoading,
    like_loading: loading,
  };
};

export const ON_POST_LIKE = (post_id, addLike, token) => {
  return (dispatch) => {
    dispatch(setLikeLoading(true));
    console.log(addLike);
    fetch("http://localhost:5000/feed/post_like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        post_id: post_id,
        addLike: addLike,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to create post.");
        }

        return res.json();
      })
      .then((resData) => {
        dispatch(setLikeLoading(true));
        console.log(resData);
      })
      .catch((err) => console.log(err));
  };
};
