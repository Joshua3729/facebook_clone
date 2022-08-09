export const setAutoLogout = (milliseconds) => {
  setTimeout(() => {
    dispatch(HomeActions.onLogout());
  }, milliseconds);
};
