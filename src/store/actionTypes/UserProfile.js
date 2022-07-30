import * as actionTypes from "../actionTypes/actionTypes";
import { generateBase64FromImage } from "../../Utils/image";

export const setPreviewImg = (previewImg) => {
  return {
    type: actionTypes.onSetPreviewImg,
    previewImg: previewImg,
  };
};
export const setPreviewImgLoading = (loading) => {
  return {
    type: actionTypes.onPreviewImgLoading,
    previewImgLoading: loading,
  };
};
export const setOnFileChange = (input, value, file, formType) => {
  return {
    type: actionTypes.ON_FILE_CHANGE,
    input: input,
    file: file[0],
    value: value,
    formType: formType,
  };
};
export const OnFIleChange = (input, value, file, formType) => {
  return (dispatch) => {
    dispatch(setOnFileChange(input, value, file, formType));
    dispatch(setPreviewImgLoading(true));
    generateBase64FromImage(file[0])
      .then((b64) => {
        dispatch(setPreviewImg(b64));
        dispatch(setPreviewImgLoading(false));
      })
      .catch((e) => {
        dispatch(setPreviewImg(null));
      });
  };
};
