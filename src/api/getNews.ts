import axios from "axios";

export const getNewsFunction = (page: number) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
};
