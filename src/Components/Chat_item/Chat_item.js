import React from "react";
import classes from "./Chat_item.module.css";

const Chat_item = (props) => {
  const chat = props.chat;
  return (
    <div
      className={classes.Chat_item}
      style={{ backgroundColor: props.active ? "#ecf3ff" : "white" }}
      onClick={() => props.click(chat.user_id)}
    >
      <div className={classes.user_profile}>
        <img
          src={chat.profile_img}
          alt=""
          className={classes.user_profile_img}
        />
      </div>
      <div className={classes.chat_info}>
        <div className={classes.username}>{chat.fullname}</div>
        <div className={classes.message_text}>testing 1h</div>
      </div>
    </div>
  );
};

export default Chat_item;
