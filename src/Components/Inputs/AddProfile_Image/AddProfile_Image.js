import React from "react";
import { useDispatch } from "react-redux";
import classes from "./AddProfile_Image.module.css";
import * as HomeActions from "../../../store/actionTypes/index";

const AddProfile_Image = (props) => {
  const dispatch = useDispatch();
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
                  HomeActions.setOnInputChange(
                    "image",
                    e.target.files,
                    "photo_upload_data"
                  )
                )
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddProfile_Image;
