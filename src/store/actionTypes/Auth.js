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

export const setOnLogin = (
  isAuth,
  token,
  authLoading,
  user_id,
  fullname,
  profile_url
) => {
  return {
    type: actionTypes.ON_LOGIN,
    isAuth: isAuth,
    token: token,
    authLoading: authLoading,
    user_id: user_id,
    fullname: fullname,
    profile_url: profile_url,
  };
};

export const onLogin = (authData) => {
  return (dispatch) => {
    if (authData.formIsValid) {
      fetch(`${Url}/auth/login`, {
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
              resData.userId,
              resData.fullname,
              resData.profile_url
            )
          );
          localStorage.setItem("token", resData.token);
          localStorage.setItem("userId", resData.userId);

          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem("expiryDate", expiryDate.toISOString());
          this.setAutoLogout(remainingMilliseconds);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};
