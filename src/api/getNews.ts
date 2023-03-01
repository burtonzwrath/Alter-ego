
export const getNewsFunction = (page: number) =>{
    try {
       return  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
    }
    catch(e:any) {
        throw new Error(e.message)
    }

}


