import React from "react";
import classes from "./Stories.module.css";
import Story from "./Story/Story";
import { useSelector } from "react-redux";

const Stories = () => {
  const profile_img = useSelector((state) => state.auth.user_data.profile_img);
  console.log(profile_img);
  return (
    <div className={classes.Stories}>
      <div
        className={classes.createStory_wrapper}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), transparent) ,url("${profile_img}")`,
        }}
      >
        <div className={classes.footer_wrapper}>
          <div className={classes.addWrapper}>
            <div className={classes.add_innerWrapper}>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={classes.svg_asset}
              >
                <g fill-rule="evenodd" transform="translate(-446 -350)">
                  <g fill-rule="nonzero">
                    <path
                      d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                      transform="translate(354.5 159.5)"
                    ></path>
                    <path
                      d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                      transform="translate(354.5 159.5)"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div>Create story</div>
        </div>
      </div>

      <Story
        image={
          "https://dailynews.co.zw/wp-content/uploads/2020/03/Burna-Boy.jpg"
        }
      />
      <Story
        image={
          "https://www.musicinafrica.net/sites/default/files/images/artist_profile/202103/khamo1.jpg"
        }
      />
      <Story
        image={
          "https://www.safrolebs.com/wp-content/uploads/2022/03/20220331_171412.jpg"
        }
      />
      <Story
        image={"https://dumacollective.com/wp-content/uploads/2020/08/KK-2.jpg"}
      />
    </div>
  );
};

export default Stories;
