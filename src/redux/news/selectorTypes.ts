
export type stateType = {
    news: {
        currentPage: number,
        news: [],
        isLogged: boolean,
        status: boolean,
        error: boolean,
        flag:boolean,
    },
}

type actionIncrementType = {
    type: 'increment';
    payload: number;
}


