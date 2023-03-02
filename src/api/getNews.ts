
export const getNewsFunction = (page: number) =>{
      return  fetch(`https://jsonplaceholder.typicode.com/pots?_page=${page}&_limit=5`);
}


