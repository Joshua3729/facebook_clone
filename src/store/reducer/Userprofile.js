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
  previewImgLoading: false,
  previewImg: null,
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
          value: action.file,
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
    case actionTypes.onSetPreviewImg:
      return {
        ...state,
        previewImg: action.previewImg,
      };
    case actionTypes.onPreviewImgLoading:
      return {
        ...state,
        previewImgLoading: action.previewImgLoading,
      };
    case actionTypes.closeUploadAction:
      return {
        ...state,
        photo_upload_data: {
          image: {
            value: "",
            valid: false,
            touched: false,
            validators: [required],
          },
        },
        previewImg: null,
      };
    default:
      return state;
  }
};

export default reducer;
