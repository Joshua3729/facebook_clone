import * as actionTypes from "../actionTypes/actionTypes";

export const get_chats_data = (chats_data) => {
  return {
    type: actionTypes.GET_CHATS_DATA,
    chats_data: chats_data,
  };
};

export const getChats = () => {
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

export const getMessages = (user_id) => {
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
