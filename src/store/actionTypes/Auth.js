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

export const setOnLogin = (input) => {
  return {
    type: actionTypes.ON_INPUT_BLUR,
    input: input,
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
          rememberMe: this.state.rememberMe,
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
          this.setState({
            isAuth: true,
            token: resData.token,
            authLoading: false,
            userId: resData.userId,
          });
          localStorage.setItem("token", resData.token);
          localStorage.setItem("userId", resData.userId);
          localStorage.setItem("rememberMe", this.state.rememberMe);

          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem("expiryDate", expiryDate.toISOString());
          this.setAutoLogout(remainingMilliseconds);
        })
        .catch((err) => {
          this.setState({
            isAuth: false,
            authLoading: false,
            error: err,
            showModal: true,
            serverMessage: err.error,
          });
        });

      fetch("http://localhost:5000/feed/get_posts")
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
    }
  };
};
