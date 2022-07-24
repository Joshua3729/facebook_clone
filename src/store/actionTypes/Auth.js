import { Action } from "history";
import * as actionTypes from "./actionTypes";

export const setOnInputChange = (input, value, formType) => {
  return {
    type: actionTypes.ON_INPUT_CHANGE,
    input: input,
    value: value,
    formType: formType,
  };
};

export const setOnInputBlur = (input) => {
  return {
    type: actionTypes.ON_INPUT_BLUR,
    input: input,
  };
};
export const setSessionData = (isAuth, token, user_data) => {
  return {
    type: actionTypes.setSessionData,
    isAuth: isAuth,
    token: token,
    user_data: user_data,
  };
};

export const setOnLogin = (
  isAuth,
  token,
  authLoading,
  user_id,
  fullname,
  profile_img
) => {
  return {
    type: actionTypes.ON_LOGIN,
    isAuth: isAuth,
    token: token,
    authLoading: authLoading,
    user_id: user_id,
    fullname: fullname,
    profile_img: profile_img,
  };
};

export const onLogin = (event, authData) => {
  event.preventDefault();
  return (dispatch) => {
    if (authData.formIsValid) {
      fetch(`http://localhost:5000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
        }),
      })
        .then((res) => {
          if (res.status === 422) {
            throw { error: "Validation failed" };
          }
          if (res.status !== 200 && res.status !== 201) {
            throw {
              error:
                "Could not authenticate you. Please make sure your email and password are entered correctly.",
            };
          }
          return res.json();
        })
        .then((resData) => {
          dispatch(
            setOnLogin(
              true,
              resData.token,
              false,
              resData.user_id,
              resData.fullname,
              resData.profile_img
            )
          );

          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          const session_data = {
            token: resData.token,
            expiryDate: expiryDate.toISOString(),
            user_data: {
              user_id: resData.user_id,
              fullname: resData.fullname,
              profile_img: resData.profile_img,
            },
          };
          localStorage.setItem("session_data", JSON.stringify(session_data));
          this.setAutoLogout(remainingMilliseconds);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};

export const setOnLogout = (isAuth, token, user_data) => {
  return {
    type: actionTypes.setOnLogout,
    isAuth: isAuth,
    token: token,
    user_data: user_data,
  };
};

export const onLogout = () => {
  return (dispatch) => {
    dispatch(setOnLogout(false, null, null));
    localStorage.removeItem("session_data");
    this.props.history.push({
      search: "",
    });
  };
};

export const setOnSignup = (authLoading, showModal) => {
  return {
    type: actionTypes.setOnSignup,
    authLoading: authLoading,
    showModal: showModal,
  };
};

export const setAuthLoad = (authLoading) => {
  return {
    type: actionTypes.setAuthLoad,
    authLoading: authLoading,
  };
};

export const onSignup = (event, userData) => {
  return (dispatch) => {
    event.preventDefault();
    dispatch(setAuthLoad(true));
    if (userData.formIsValid) {
      fetch(`${Url}/auth/signup`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          name: `${userData.name}  ${userData.surname}`,
        }),
      })
        .then((res) => {
          if (res.status === 422) {
            throw {
              error:
                "Validation failed. Make sure the email address isn't used yet!",
            };
          }
          if (res.status !== 200 && res.status !== 201) {
            throw { error: "Could not create user" };
          }
          return res.json();
        })
        .then((resData) => {
          dispatch(setOnSignup(false, false));
        })
        .catch((err) => {
          console.log(error);
        });
      event.target.reset();
    } else {
      alert("form not valid :(");
      dispatch(setAuthLoad(false));
    }
  };
};
export const setShowModal = () => {
  return { type: actionTypes.setShowModal, showModal: true };
};
