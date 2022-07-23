import * as actionTypes from "./actionTypes";

export const setOnInputChange = (input, value, formType) => {
  return {
    type: actionTypes.ON_INPUT_CHANGE,
    input: input,
    value: value,
    formType: formType,
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
