import React from "react";
import Notification_item from "../Notification_item/Notification_item";
import classes from "./NotificationPop_up.module.css";

const NotificationPop_up = (props) => {
  return (
    <div className={classes.NotificationPop_up_wrapper}>
      <Notification_item userNotification={props.userNotification} />
    </div>
  );
};

export default NotificationPop_up;
