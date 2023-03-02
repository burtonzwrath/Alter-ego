import { stateAuthType } from "./selectorTypes";

export const getIsLogged = (state: stateAuthType) => state.auth.isLogged;

