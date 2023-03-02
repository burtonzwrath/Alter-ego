export interface newsSliceTypes {
     currentPage: number;
    news: any[];
    isLogged: boolean;
    isLoading: boolean | null;
    status: 'pending' | 'resolved' | 'rejected' | null;
    error: string | null | undefined
    flag: boolean;
  }