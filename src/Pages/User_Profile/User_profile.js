import React from "react";
import classes from "./User_profile.module.css";

const User_profile = () => {
  return (
    <div className={classes.User_profile}>
      <div className={classes.header_bar}>
        <div className={classes.cover_wrapper}></div>
        <div className={classes.profile_wrapper}>
          <div className={classes.header_innerWrapper}>
            <div className={classes.userImg}>
              <img src="" alt="" />
            </div>
            <div className={classes.userName}>Hery Ford</div>
          </div>
          <div className={classes.btns_wrapper}>
            <button className={classes.add_friend}>Friends</button>
            <button className={classes.messanger}>
              <i class="fas fa-brands fa-facebook-messenger"></i> Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_profile;
