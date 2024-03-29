import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./AddProfile_Image.module.css";
import * as HomeActions from "../../../store/actionTypes/index";
import LoadingSpinner from "../../UI/LoadingSpinners/LoadingSpinner_1/LoadingSpinner";

const AddProfile_Image = (props) => {
  const dispatch = useDispatch();
  const img = useSelector((state) => state.userprofile.photo_upload_data);
  const imgLoading = useSelector(
    (state) => state.userprofile.previewImgLoading
  );
  const imageFile = useSelector(
    (state) => state.userprofile.photo_upload_data.image.value
  );
  const previewImg = useSelector((state) => state.userprofile.previewImg);

  console.log(imgLoading);

  let img_preview = null;
  if (imgLoading) {
    img_preview = (
      <div className={classes.LoadingSpinner_wrapper}>
        <LoadingSpinner />
      </div>
    );
  } else if (previewImg) {
    img_preview = (
      <div className={classes.img_previewWrapper}>
        <img src={previewImg} alt="profile" className={classes.img_preview} />
      </div>
    );
  }

  let upload_button = previewImg ? (
    <div className={classes.upload_profile_img}>
      <button className={classes.cancel_upload}>Cancel</button>
      <button
        className={classes.upload_btn}
        onClick={() => props.uploadUserProfile(imageFile)}
      >
        Save
      </button>
    </div>
  ) : (
    <div className={classes.image_btn_wrapper}>
      <div className={classes.image_btn_Innerwrapper}>
        <label for="file-picker">
          <button className={classes.file_picker_btn}>
            <i className={classes.add_icon}></i> Upload Photo
          </button>
          <input
            id="file-picker"
            type="file"
            accept="image/png,image/jpg,image/jpeg"
            className={classes.image_picker}
            onChange={(e) =>
              dispatch(
                HomeActions.OnFIleChange(
                  "image",
                  e.target.value,
                  e.target.files,
                  "photo_upload_data"
                )
              )
            }
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className={classes.AddProfile_Image_wrapper}>
      <div className={classes.CreatePost_header}>
        Update profile picture
        <div
          className={classes.close}
          onClick={() => props.set_show_imageUpload_modal_handler(false)}
        >
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"
            alt=""
          />
        </div>
      </div>
      {img_preview}
      {upload_button}
    </div>
  );
};

export default AddProfile_Image;
