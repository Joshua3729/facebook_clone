import React from "react";
import classes from "./Chat_item.module.css";

const Chat_item = (props) => {
  return (
    <div
      className={classes.Chat_item}
      style={{ backgroundColor: props.active ? "#ecf3ff" : "white" }}
    >
      <div className={classes.user_profile}></div>
      <div className={classes.chat_info}>
        <div className={classes.username}>Joshua Khumalo</div>
        <div className={classes.message_text}>testing 1h</div>
      </div>
    </div>
  );
};

export default Chat_item;
