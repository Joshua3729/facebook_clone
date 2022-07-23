import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  Auth: false,
  token: null,
  user_data: {
    user_id: null,
    fullname: null,
    profile_url: null,
  },
  loginForm: {
    email: {
      value: "",
      valid: false,
      touched: false,
      validators: [required, email],
    },
    password: {
      value: "",
      valid: false,
      touched: false,
      validators: [required, length({ min: 5 })],
    },
  },
  signupForm: {
    email: {
      value: "",
      valid: false,
      touched: false,
      validators: [required, email],
    },
    password: {
      value: "",
      valid: false,
      touched: false,
      validators: [required, length({ min: 5 })],
    },
    firstname: {
      value: "",
      valid: false,
      touched: false,
      validators: [required],
    },
    lastname: {
      value: "",
      valid: false,
      touched: false,
      validators: [required],
    },
    gender: {
      value: "",
      valid: false,
      touched: false,
      validators: [required],
    },
    DOB: {
      value: "",
      valid: false,
      touched: false,
      validators: [required],
    },
  },
  formIsValid: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
