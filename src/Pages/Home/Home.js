import React, { useEffect } from "react";
import WhatsOnYourMind from "../../Components/Inputs/WhatsOnYourMind/WhatsOnYourMind";
import Posts from "../../Components/Posts/Posts";
import Stories from "../../Components/Stories/Stories";
import classes from "./Home.module.css";
import Modal from "../../Components/Modal/Modal";
import openSocket from "socket.io-client";
import * as HomeActions from "../../store/actionTypes/index";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../Components/Inputs/CreatePost/CreatePost";
const Home = () => {
  const posts = useSelector((state) => state.home.posts);
  const user_data = useSelector((state) => state.auth.user_data);
  const showCreatePost_modal = useSelector(
    (state) => state.home.showCreatePost_modal
  );
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeActions.initPosts(token));
    const socket = openSocket("http://localhost:5000");
    socket.on("posts", (data) => {
      if (data.action == "create") dispatch(HomeActions.getNewPost(data.post));
    });
    console.log("once");
  }, []);
  return (
    <>
      <Modal show={showCreatePost_modal}>
        <CreatePost
          fullname={user_data.fullname}
          profile_img={user_data.profile_img}
        />
      </Modal>
      <div className={classes.Home}>
        <div className={classes.gutter}></div>
        <div className={classes.Home_innerWrapper}>
          <div className={classes.main}>
            <Stories />
            <div className={classes.feed}>
              <WhatsOnYourMind />
              <Posts posts={posts} />
              <div className={classes.noMore_posts}>
                <div className={classes.inner_wrapper}>
                  <p className={classes.Notice}>No More Posts</p>
                  <p className={classes.CTA}>
                    Add more friends to see more posts in your Feed.
                  </p>
                  <button className={classes.findFriends_btn}>
                    Find Friends
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.taskbar}></div>
        </div>
      </div>
    </>
  );
};
export default Home;
