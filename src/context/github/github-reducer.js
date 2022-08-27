export const reducer = (state, action) => {
  switch (action.type) {
    case "USERS_GİTHUB":
      return { ...state, users: action.users, loading: false };
    case "USER_GİTHUB":
      return { ...state, user: action.user, loading: false };
    case "USERS_GİTHUB_CLEAR":
      return { ...state, users: [] };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};
