import * as actionTypes from "../actionTypes/actionTypes";
import { required, length, email } from "../../Utils/validators";

const initialState = {
  isAuth: false,
  token: null,
  user_data: {
    user_id: null,
    fullname: null,
    profile_img: null,
  },
  authLoading: false,
  showModal: false,
  DOB: {
    date: null,
    month: null,
    year: null,
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
  },
  formIsValid: false,
};
const reducer = (state = initialState, action) => {
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
        isAuth: action.isAuth,
        token: action.token,
        authLoading: false,
        user_data: {
          user_id: action.user_id,
          fullname: action.fullname,
          profile_img: action.profile_img,
        },
      };
    case actionTypes.setSessionData:
      return {
        ...state,
        isAuth: action.isAuth,
        token: action.token,
        user_data: action.user_data,
      };
    case actionTypes.setOnLogout:
      return {
        ...state,
        isAuth: action.isAuth,
        token: action.token,
        user_data: action.user_data,
      };
    case actionTypes.setAuthLoad:
      return {
        ...state,
        authLoading: action.authLoading,
      };
    case actionTypes.setOnSignup:
      return {
        ...state,
        authLoading: action.authLoading,
        showModal: action.showModal,
      };
    case actionTypes.setShowModal:
      return {
        ...state,
        showModal: action.showModal,
      };
    case actionTypes.setOnDateInputChange:
      return {
        ...state,
        DOB: {
          ...state.DOB,
          [action.input]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
