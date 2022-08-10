import * as HomeActions from "../store/actionTypes/index";

export const setAutoLogout = (milliseconds, dispatch) => {
  setTimeout(() => {
    dispatch(HomeActions.onLogout());
  }, milliseconds);
};
