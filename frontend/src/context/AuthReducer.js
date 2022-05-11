const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, isLoading: true, error: false };
    case "LOGIN_SUCCESS":
      return { user: action.payload, isLoading: false, error: false };
    case "LOGIN_FAILED":
      return { user: null, isLoading: false, error: action.payload };
    case "FOLLOW":
      return {
        user: null,
        isLoading: false,
        error: false,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        user: null,
        isLoading: false,
        error: false,
        user: {
          ...state.user,
          followings:state.user.followings.filter(el=>el !== action.payload),
        },
      };

    default:
      return state;
  }
};
export default AuthReducer;
