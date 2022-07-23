import * as actionTypes from "../actionTypes/actionTypes";
import { required, length, email } from "../../Utils/validators";

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
    case actionTypes.ON_INPUT_CHANGE:
      let isValid = true;
      let validators =
        action.formType === "loginForm"
          ? state.loginForm[action.input].validators
          : state.signupForm[action.input].validators;
      for (const validator of validators) {
        isValid = isValid && validator(action.value);
      }
      let previousState =
        action.formType === "loginForm" ? state.loginForm : state.signupForm;
      const updatedForm = {
        ...previousState,
        [action.input]: {
          ...previousState[action.input],
          valid: isValid,
          value: action.value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        if (inputName !== "formIsValid") {
          formIsValid = formIsValid && updatedForm[inputName].valid;
        }
      }
      return {
        ...state,
        [action.formType]: updatedForm,
        formIsValid: formIsValid,
      };

    case actionTypes.ON_INPUT_BLUR:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.input]: {
            ...state.loginForm[action.input],
            touched: true,
          },
        },
      };
    case actionTypes.ON_LOGIN:
      return {
        ...state,
        isAuth: true,
        token: resData.token,
        authLoading: false,
        userId: resData.userId,
      };
    default:
      return state;
  }
};

export default authReducer;
