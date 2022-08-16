import React from "react";
import Notification_item from "../Notification_item/Notification_item";
import classes from "./NotificationPop_up.module.css";
import ReactDOM from "react-dom";

const NotificationPop_up = (props) => {
  setTimeout(() => {
    props.closeNotificationPopup(false);
  }, 5000);
  return ReactDOM.createPortal(
    <div
      className={classes.NotificationPop_up_wrapper}
      style={{
        transform: props.show ? "translateX(0)" : "translateX(-100%)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className={classes.header_wrapper}>
        <div className={classes.title}>Notifications</div>
        <div
          className={classes.close}
          onClick={() => props.closeNotificationPopup(false)}
        >
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"
            alt=""
          />
        </div>
      </div>
      <Notification_item userNotification={props.userNotification} />
    </div>,
    document.getElementById("notification")
  );
};

export default NotificationPop_up;
