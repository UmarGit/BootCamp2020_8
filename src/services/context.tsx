import React, { createContext, useReducer, Dispatch } from "react";
import {Profile} from '../types/types'
import {
  ProfileReducer,
  ProfileActions,
} from "./reducer";

type InitialStateType = {
  Profiles: Profile[];
};

const initialState = {
  Profiles: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProfileActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { Profiles }: InitialStateType,
  action: ProfileActions
) => ({
  Profiles: ProfileReducer(Profiles, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
