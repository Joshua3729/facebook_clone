import React from "react";
import classes from "./PhotosCard.module.css";

const PhotosCard = () => {
  return (
    <div className={classes.PhotosCard}>
      <div className={classes.header_wrapper}>
        <h2>Intro</h2>
        <p className={classes.seeAll}>See all photos</p>
      </div>
      <div className={classes.photosWrapper}>
        <div
          className={classes.photo_item}
          style={{
            BackgroundImage:
              "url(https://www.businessinsider.in/thumb/msid-49012513,width-700,height-525/19-Jourdan-Dunn-3-5-million-2-2-million-Dunn-was-discovered-in-a-London-branch-of-budget-fashion-retailer-Primark-and-ended-up-securing-deals-with-Maybelline-and-Calvin-Klein-She-also-models-for-Tommy-Hilfiger-and-Burberry-.jpg)",
          }}
        >
          <img
            src="https://www.businessinsider.in/thumb/msid-49012513,width-700,height-525/19-Jourdan-Dunn-3-5-million-2-2-million-Dunn-was-discovered-in-a-London-branch-of-budget-fashion-retailer-Primark-and-ended-up-securing-deals-with-Maybelline-and-Calvin-Klein-She-also-models-for-Tommy-Hilfiger-and-Burberry-.jpg"
            alt=""
          />
        </div>
        <div
          className={classes.photo_item}
          style={{
            backgroundImage:
              "url(https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45964/article_full%401x.jpg",
          }}
        >
          <img
            src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45964/article_full%401x.jpg"
            alt=""
          />
        </div>
        <div
          className={classes.photo_item}
          style={{
            backgroundImage:
              "url(https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10004494/20634370267aaa410c8499b340c9039945ef983e45ba20b9fd06881595ed9f25691b47e5fa8984_thumb.jpg)",
          }}
        >
          <img
            src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10004494/20634370267aaa410c8499b340c9039945ef983e45ba20b9fd06881595ed9f25691b47e5fa8984_thumb.jpg"
            alt=""
          />
        </div>
        <div
          className={classes.photo_item}
          style={{
            backgroundImage:
              "url(https://www.africa.com/wp-content/uploads/2021/04/south-africa-model-1.jpg",
          }}
        >
          <img
            src="https://www.africa.com/wp-content/uploads/2021/04/south-africa-model-1.jpg"
            alt=""
          />
        </div>
        <div
          className={classes.photo_item}
          style={{
            backgroundImage:
              "url(https://www.themodelskit.co.uk/wp-content/uploads/2020/12/shutterstock_293199956-1024x683.jpg)",
          }}
        >
          <img
            src="https://www.themodelskit.co.uk/wp-content/uploads/2020/12/shutterstock_293199956-1024x683.jpg"
            alt=""
          />
        </div>
        <div
          className={classes.photo_item}
          style={{
            backgroundImage:
              "url(https://www.liveabout.com/thmb/MhosEIqudAf-w-q94qUr5K8Lpq8=/2121x1414/filters:fill(auto,1)/GettyImages-638316888-58bd8bc93df78c353c5b8631.jpg)",
          }}
        >
          <img
            src="https://www.liveabout.com/thmb/MhosEIqudAf-w-q94qUr5K8Lpq8=/2121x1414/filters:fill(auto,1)/GettyImages-638316888-58bd8bc93df78c353c5b8631.jpg"
            alt=""
          />
        </div>

        {/* 
        
       
        <img
          src="https://www.liveabout.com/thmb/MhosEIqudAf-w-q94qUr5K8Lpq8=/2121x1414/filters:fill(auto,1)/GettyImages-638316888-58bd8bc93df78c353c5b8631.jpg"
          alt=""
        /> */}
        {/* <img
          src="https://www.businessinsider.in/thumb/msid-49012513,width-700,height-525/19-Jourdan-Dunn-3-5-million-2-2-million-Dunn-was-discovered-in-a-London-branch-of-budget-fashion-retailer-Primark-and-ended-up-securing-deals-with-Maybelline-and-Calvin-Klein-She-also-models-for-Tommy-Hilfiger-and-Burberry-.jpg"
          alt=""
        />
        <img
          src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45964/article_full%401x.jpg"
          alt=""
        />
        <img
          src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10004494/20634370267aaa410c8499b340c9039945ef983e45ba20b9fd06881595ed9f25691b47e5fa8984_thumb.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default PhotosCard;
