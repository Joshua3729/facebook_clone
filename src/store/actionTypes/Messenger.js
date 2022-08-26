import * as actionTypes from "../actionTypes/actionTypes";

export const get_chats_data = (chats_data) => {
  return {
    type: actionTypes.GET_CHATS_DATA,
    chats_data: chats_data,
  };
};

export const getChats = (token) => {
  return (dispatch) => {
    fetch("http://localhost:5000/feed/get_chats", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch comments.");
        }

        return res.json();
      })
      .then((resData) => {
        dispatch(get_chats_data(resData.chats));
      })
      .catch((err) => console.log(err));
  };
};

const get_messages_data = (messages_data, user_data) => {
  return {
    type: actionTypes.GET_MESSAGES_DATA,
    messages_data: messages_data,
    user_data: user_data,
  };
};

export const getMessages = (user_id, token) => {
  return (dispatch) => {
    fetch("http://localhost:5000/feed/get_messages/" + user_id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch messages.");
        }

        return res.json();
      })
      .then((resData) => {
        dispatch(get_messages_data(resData.messages, resData.user));
      })
      .catch((err) => console.log(err));
  };
};

const clearMessage = () => {
  return {
    type: actionTypes.CLEAR_MESSAGE,
  };
};

export const getNewMessage = (newMessage) => {
  return {
    type: actionTypes.GET_NEW_MESSAGE,
    newMessage: newMessage,
  };
};

export const sendMessage = (
  e,
  message,
  sender_user_id,
  target_user_id,
  token
) => {
  e.preventDefault();

  // setUser_comment("");
  // setPostComment_loading(true);

  return (dispatch) => {
    dispatch(clearMessage());
    dispatch(
      getNewMessage({
        text_message: message,
        sender_user_id: sender_user_id,
        target_user_id: target_user_id,
      })
    );
    fetch("http://localhost:5000/feed/send_message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        target_user_id: target_user_id,
        text_message: message,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to send message.");
        }

        return res.json();
      })
      .then((resData) => {})
      .catch((err) => console.log(err));
  };
};

export const onMessageChange = (user_message) => {
  return {
    type: actionTypes.ON_MESSAGE_CHANGE,
    user_message: user_message,
  };
};
