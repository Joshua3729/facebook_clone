import React from "react";
import Modal from "../../Components/Modal/Modal";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  const show = true;

  return (
    <>
      <Modal show={show}>
        <div className={classes.modal_wrapper}>
          <div className={classes.header_wrapper}>
            <div className={classes.innerWrapper}>
              <div className={classes.signup}>Sign Up</div>
              <div className={classes.close}>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={[classes.AuthPage, show && classes.modal_open].join(" ")}>
        <div className={classes.innerWrapper}>
          <div className={classes.left_wrapper}>
            <div className={classes.text_wrapper}>
              <h1 className={classes.logo}>bookface</h1>
              <h3 className={classes.slogan}>
                Bookface helps you connect and share with the people in your
                life.
              </h3>
            </div>
          </div>
          <div className={classes.right_wrapper}>
            <div className={classes.signIn_input}>
              <div
                className={[classes.email_wrapper, classes.input_item].join(
                  " "
                )}
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
    </>
  );
};

export default AuthPage;
