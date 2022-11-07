import { history } from "..";
import { TOKEN } from "../../constants";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
export const TRY = "TRY";
export const LOGIN = "LOGIN";
export const AUTHORIZE = "AUTHORIZE";
export const REGISTRATION = "REGISTRATION";

export type UserReducerState = {
  user: any;
  isLogged: boolean;
};

const initialState = {
  user: {},
  isLogged: false,
};

type SetUserActionType = {
  type: string;
  payload: {
    user: any;
    isLogged: boolean;
    token: string;
  };
};

type LogOutUserActionType = {
  type: typeof LOG_OUT;
};

type UserReducerActions = SetUserActionType | LogOutUserActionType;

const userReducer = (state = initialState, action: UserReducerActions) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogged: true,
      };
    case LOG_OUT:
      // @ts-ignore: Local storage using
      localStorage.clear(TOKEN);
      history.push("/");
      return {
        ...state,
        user: {},
        isLogged: false,
      };
    default:
      return state;
  }
};

export const setUserAC = (user: any) => ({ type: SET_USER, payload: user });
export const logOutAC = () => ({ type: LOG_OUT });
export const loginAC = (email: string, password: string) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});
export const autorizeAC = () => ({ type: AUTHORIZE });
export const registrationAC = (email: string, password: string) => ({
  type: REGISTRATION,
  payload: {
    email,
    password,
  },
});

export default userReducer;
