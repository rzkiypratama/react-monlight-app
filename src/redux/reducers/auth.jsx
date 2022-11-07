import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";
const initialState = {
  userData: {
    id: null,
    token: null,
    role: null,
    image: null,
  },
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
};
const authsReducer = (prevState = initialState, action) => {
  const { authLogin, authLogout } = ACTION_STRING;
  const { Pending, Rejected, Fulfilled } = ActionType;

  switch (action.type) {
    case authLogin.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogin.concat("_", Rejected):
      const errorRes = action.payload.response.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorRes,
        isFulfilled: false,
      };
    case authLogin.concat("_", Fulfilled):
      const response = action.payload;
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        userData: {
          id: response.data.data.payload.id,
          image: response.data.data.payload.image,
          role: response.data.data.payload.role,
          token: response.data.data.token,
        },
      };
    case authLogout.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case authLogout.concat("_", Rejected):
      const errorLogout = action.payload.response.data.msg;
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: errorLogout,
      };
    case authLogout.concat("_", Fulfilled):
      return {
        initialState,
      };
    default:
      return prevState;
  }
};

export default authsReducer;