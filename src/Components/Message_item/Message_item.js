import React from "react";
import { useSelector } from "react-redux";
import classes from "./Message_item.module.css";

const Message_item = (props) => {
  const user_id = useSelector((state) => state.auth.user_data.user_id);

  const message_item =
    props.message.sender_user_id == user_id ? (
      <div className={classes.my_message_wrapper}>
        <div className={classes.my_message}>{props.message.text_message}</div>
      </div>
    ) : (
      <div className={classes.connection_message}>
        <div className={classes.connection_profile}>
          <img
            src={props.message.profile_img}
            alt="profile"
            className={classes.profile}
          />
        </div>
        <div className={classes.message}>{props.message.text_message}</div>
      </div>
    );
  return (
    <div className={classes.Message_item}>
      <div className={classes.time_stamp}>Fri 12:31 PM</div>
      <div className={classes.message_wrapper}>{message_item}</div>
    </div>
  );
};

export default Message_item;
