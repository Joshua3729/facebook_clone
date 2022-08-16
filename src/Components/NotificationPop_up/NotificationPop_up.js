import React from "react";
import Notification_item from "../Notification_item/Notification_item";
import classes from "./NotificationPop_up.module.css";

const NotificationPop_up = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.NotificationPop_up_wrapper}>
      <Notification_item userNotification={props.userNotification} />
    </div>,
    document.getElementById("notification")
  );
};

export default NotificationPop_up;
