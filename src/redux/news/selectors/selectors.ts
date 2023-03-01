import { stateType } from "./selectorTypes";

export const getNews = (state: stateType) => state.news.news;
export const getCurrentPage = (state: stateType) => state.news.currentPage;
export const getFlag = (state: stateType) => state.news.flag;
export const getStatus = (state: stateType) => state.news.status;
export const getError = (state: stateType) => state.news.error;
export const getIsLogged = (state: stateType) => state.news.isLogged;
export const getIsLoading = (state: stateType) => state.news.isLoading;
