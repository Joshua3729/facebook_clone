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
        dispatch(setPosts(resData.posts));
      })
      .catch((err) => console.log(err));
  };
};
