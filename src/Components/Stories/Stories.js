import React from "react";
import classes from "./Stories.module.css";
import Story from "./Story/Story";

const Stories = () => {
  return (
    <div className={classes.Stories}>
      <Story
        image={
          "https://sahiphopza.co/wp-content/uploads/2022/01/download-major-league-djz-mixes-for-january-2022-Mp3-Download.jpg"
        }
      />
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
          "https://kaslam.co.za/wp-content/uploads/2019/04/kelly-Khumalo.jpg"
        }
      />
      <Story
        image={"https://dumacollective.com/wp-content/uploads/2020/08/KK-2.jpg"}
      />
    </div>
  );
};

export default Stories;
