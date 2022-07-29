import React from "react";
import classes from "./AddProfile_Image.module.css";

const AddProfile_Image = (props) => {
  return (
    <div className={classes.AddProfile_Image_wrapper}>
      <div className={classes.CreatePost_header}>
        Create Post
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
    </div>
  );
};

export default AddProfile_Image;
