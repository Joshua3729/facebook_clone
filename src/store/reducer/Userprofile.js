import * as actionTypes from "../actionTypes/actionTypes";
import { required, length, email } from "../../Utils/validators";

const initialState = {
  photo_upload_data: {
    image: {
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
    case actionTypes.ON_FILE_CHANGE:
      let isValid = true;
      let validators = state.photo_upload_data[action.input].validators;
      for (const validator of validators) {
        isValid = isValid && validator(action.value);
      }
      let previousState = state.photo_upload_data;
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

    default:
      return state;
  }
};

export default reducer;
