import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  messages_data: null,
  chats_data: null,
  user_data: null,
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
    default:
      return state;
  }
};

export default reducer;
