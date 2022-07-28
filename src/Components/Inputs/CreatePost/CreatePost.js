import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CreatePost.module.css";
import * as HomeActions from "../../../store/actionTypes/index";
import Picker from "emoji-picker-react";

const CreatePost = (props) => {
  const dispatch = useDispatch();
  const formValid = useSelector(
    (state) => state.home.post_data.post_caption.length >= 10
  );
  const token = useSelector((state) => state.auth.token);
  const postData = useSelector((state) => state.home.post_data);
  const [showEmoji, setShowEmoji] = useState(false);
  const post_caption = useSelector(
    (state) => state.home.post_data.post_caption
  );
  const submitting = useSelector((state) => state.home.submitting);
  const onEmojiClick = (event, emojiObject) => {
    dispatch(HomeActions.setOnEmojiClick(event, emojiObject));
  };
  const setShowEmojiHandler = () => {
    setShowEmoji(!showEmoji);
  };
  return (
    <div className={classes.CreatePost}>
      <div className={classes.CreatePost_header}>
        Create Post
        <div
          className={classes.close}
          onClick={() => dispatch(HomeActions.setShowCreatePost_Modal(false))}
        >
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"
            alt=""
          />
        </div>
      </div>
      <form
        className={classes.CreatePost_form}
        onSubmit={(e) =>
          dispatch(HomeActions.ON_CREATE_POST(e, postData, token))
        }
      >
        <div className={classes.user_wrapper}>
          <div className={classes.profile_wrapper}>
            <img src={props.profile_img} alt="" />
          </div>
          <div className={classes.right_wrapper}>
            <div className={classes.user_name}>{props.fullname}</div>
            <div className={classes.visibility_marker}>Public</div>
          </div>
        </div>
        <textarea
          className={classes.text_input}
          placeholder={`Whats on your mind?, ${props.fullname.split(" ")[0]}`}
          name="txtname"
          maxlength="2000"
          value={post_caption}
          onChange={(e) => dispatch(HomeActions.setPostCaption(e.target.value))}
        ></textarea>
        <div className={classes.emoji_pickerWrapper}>
          <div className={classes.emojiPicker_descriptor}>Emoji</div>
          <div
            className={classes.chooseImoji}
            onClick={() => setShowEmojiHandler()}
          >
            <i
              data-visualcompletion="css-img"
              className={classes.show_emoji}
              aria-label="Insert an emoji"
              role="img"
            ></i>
          </div>
          {showEmoji && (
            <div className={classes.emoji_picker}>
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
        <div className={classes.addToYourPost}>
          <div className={classes.commad}>Add to your post</div>
          <div className={classes.options_wrapper}>
            <div className={classes.media_wrapper}>
              <div className={classes.descriptor}>Photo/Video</div>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className={classes.Media}
              >
                <g fillRule="evenodd" transform="translate(-444 -156)">
                  <g>
                    <path
                      d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                      transform="translate(352 156.5)"
                    ></path>
                    <path
                      fillRule="nonzero"
                      d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                      transform="translate(352 156.5)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <button className={classes.post_btn} disabled={!formValid}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
