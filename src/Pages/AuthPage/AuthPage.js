import React from "react";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={classes.AuthPage}>
      <div className={classes.innerWrapper}>
        <div className={classes.left_wrapper}>
          <div className={classes.text_wrapper}>
            <h1 className={classes.logo}>bookface</h1>
            <h3 className={classes.slogan}>
              Bookface helps you connect and share with the people in your life.
            </h3>
          </div>
        </div>
        <div className={classes.right_wrapper}>
          <div className={classes.signIn_input}>
            <div
              className={[classes.email_wrapper, classes.input_item].join(" ")}
            >
              <input
                type="email"
                className={classes.email_address}
                placeholder="Email address"
              />
            </div>
            <div
              className={[classes.password_wrapper, classes.input_item].join(
                " "
              )}
            >
              <input
                type="password"
                className={classes.password}
                placeholder="Password"
              />
            </div>
            <button className={classes.LogIn_btn}>Log In</button>

            <div className={classes.fogort_password}>Forgotten password?</div>
            <div className={classes.createAccount_wrapper}>
              <button className={classes.createAccount_btn}>
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
