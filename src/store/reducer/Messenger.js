import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  messages_data: [],
  chats_data: null,
  user_data: null,
  user_message: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHATS_DATA:
      return {
        ...state,
        chats_data: action.chats_data,
      };
    case actionTypes.GET_MESSAGES_DATA:
      return {
        ...state,
        messages_data: action.messages_data,
        user_data: action.user_data,
      };
    case actionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        user_message: "",
      };
    case actionTypes.ON_MESSAGE_CHANGE:
      return {
        ...state,
        user_message: action.user_message,
      };
    case actionTypes.GET_NEW_MESSAGE:
      return {
        ...state,
        messages_data: [...state.messages_data, action.newMessage],
      };
    default:
      return state;
  }
};

export default reducer;
