import React from "react";
import classes from "./Notification_item.module.css";
import like_icon from "../../Assets/Images/like.svg";
import { getNotificationTimeCreated } from "../../Utils/Date";

const Notification_item = (props) => {
  const userNotification = props.userNotification;
  const notification_type = userNotification.action_type;
  let notification_icon = null;
  let notification_text = null;
  if (notification_type == "comment") {
    notification_icon = <i className={classes.msg_icon}></i>;
    notification_text = "commented on your post";
  } else if (notification_type == "like") {
    notification_icon = <img src={like_icon} className={classes.like_icon} />;
    notification_text = "liked your post";
  }
  return (
    <div className={classes.notification_item}>
      <div className={classes.userImg_wrapper}>
        <img src={userNotification.profile_img} alt="profile" />
        <div className={classes.comment_notification_icon}>
          {notification_icon}
        </div>
      </div>
      <div className={classes.notification_info_outer_wrapper}>
        <div className={classes.notification_info_wrapper}>
          <span className={classes.notification_username}>
            {userNotification.fullname}
          </span>{" "}
          {notification_text}
        </div>
        <div className={classes.timestamp}>
          {getNotificationTimeCreated(userNotification.created_at)}
        </div>
      </div>
    </div>
  );
};

export default Notification_item;
