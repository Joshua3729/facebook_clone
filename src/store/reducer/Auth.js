import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  Auth: false,
  token: null,
  user_data: {
    user_id: null,
    fullname: null,
    profile_url: null,
  },
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
