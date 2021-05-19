export const loginInitialState = {
  isLogin: false,
};

export function LoginReducer(state, value) {
  switch (value.type) {
    case "login":
      return {
        ...state,
        isLogin: true,
      };

    default:
      return console.log("ERROR IN LOGIN REDUCER");
  }
}
