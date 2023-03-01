export const getNewsFunction = (page: number) =>
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
