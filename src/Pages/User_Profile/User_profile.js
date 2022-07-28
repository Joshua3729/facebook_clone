import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IntroCard from "../../Components/IntroCard/IntroCard";
import PhotosCard from "../../Components/PhotosCard/PhotosCard";
import classes from "./User_profile.module.css";
import WhatsOnYourMind from "../../Components/Inputs/WhatsOnYourMind/WhatsOnYourMind";
import { useParams } from "react-router-dom";

const User_profile = () => {
  // const user_id = props.match?.params.user_id;
  const user_id = useParams().user_id;
  console.log(user_id);
  useEffect(() => {
    getUser_posts();
  }, []);

  const getUser_posts = () => {
    fetch(`http://localhost:5000/feed/get_user_posts/${user_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts.");
        }

        return res.json();
      })
      .then((resData) => {
        dispatch(setPosts(resData.data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.User_profile}>
      <div className={classes.header_bar}>
        <div className={classes.cover_wrapper}></div>
        <div className={classes.profile_wrapper}>
          <div className={classes.header_innerWrapper}>
            <div className={classes.userImg}>
              <img
                src="https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/107872010_596538737968088_6361233542478177533_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEm9eHPS-2cH4Hoca4l2nICezNFOL2SHoJ7M0U4vZIegsek9P1Wnov0S0mbwrwTbWoBnrSbWdcvoimRLnmf6das&_nc_ohc=rYZ45PYCjC8AX_7Eejp&tn=w-XfwyrRnX5LMnjl&_nc_ht=scontent-cpt1-1.xx&oh=00_AT9Xq5iKGmMs5_F1G0q2R-9UqyspVstjBvQifagJHGdwyA&oe=62F3592C"
                alt=""
              />
            </div>
            <div className={classes.userName}>Hery Ford</div>
          </div>
          <div className={classes.btns_wrapper}>
            <button className={classes.add_friend}>
              <img
                className={classes.friends}
                src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/c9BbXR9AzI1.png?_nc_eui2=AeGSUajAFM2EC-zzkuCL-uduFsz17BrQ-k4WzPXsGtD6Tg-DUVQDyRyX2ecuHvzVNvHAdq9wUYI96qGfG47raCkn"
                alt=""
                height="20"
                width="20"
              />
              Friends
            </button>
            <button className={classes.messanger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={classes.message}
              >
                <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
              </svg>{" "}
              Message
            </button>
          </div>
        </div>
        <div className={classes.nav_bar}>
          <ul className={classes.links_wrapper}>
            <li className={[classes.nav_item, classes.active].join(" ")}>
              Posts
            </li>
            <li className={classes.nav_item}>About</li>
            <li className={classes.nav_item}>Friends</li>
            <li className={classes.nav_item}>Photos</li>
            <li className={classes.nav_item}>Videos</li>
          </ul>
        </div>
      </div>
      <div className={classes.main_wrapper}>
        <div className={classes.main}>
          <div className={classes.left_wrapper}>
            <IntroCard />
            <PhotosCard />
          </div>
          <div className={classes.right_wrapper}>
            <WhatsOnYourMind />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_profile;
