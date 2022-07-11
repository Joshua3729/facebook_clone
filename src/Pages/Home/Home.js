import React from "react";
import WhatsOnYourMind from "../../Components/Inputs/WhatsOnYourMind/WhatsOnYourMind";
import Posts from "../../Components/Posts/Posts";
import Stories from "../../Components/Stories/Stories";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.gutter}></div>
      <div className={classes.Home_innerWrapper}>
        <div className={classes.main}>
          <Stories />
          <div className={classes.feed}>
            <WhatsOnYourMind />
            <Posts />
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
  );
};
export default Home;
