import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={classes.Posts}>
      <Post
        user_name={"Drake"}
        time={"16h"}
        media={
          "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/mb7jv2qtrxgfvf9jjcrk/drake-french"
        }
        userImage={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        }
        userImg={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        }
      />
      <Post
        user_name={"Sive Wana"}
        time={"1h"}
        media={
          "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/292488104_3218465311761624_637085631899039452_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHO8JVTCCst7bdh2m8pqK-eQQBjjFDfLGFBAGOMUN8sYfGFAnsXgj8rU-_91TYw9LJA78Yppla-tt7hW6MTxqQ8&_nc_ohc=3ItPk2Byl-MAX-_swTr&tn=TWGJvV15KZeOAq0t&_nc_ht=scontent-cpt1-1.xx&oh=00_AT-TmWwf5fJSCs0ASa-nGJ7iMb-6hS5d7CMhznlYL1Gvrg&oe=62D077FE"
        }
        userImg={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        }
      />
      <Post
        user_name={"Kygo"}
        time={"1d"}
        caption={"Hello Ibiza!"}
        media={
          "https://i.scdn.co/image/ab6761610000e5eb6567299e3c53cf2a250fbdce"
        }
        userImg={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        }
      />
      <Post
        user_name={"Mabongi KayWan"}
        time={"06 june"}
        text={"SBWL ukuya Emalydin today"}
        userImg={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        }
      />
    </div>
  );
};

export default Posts;
