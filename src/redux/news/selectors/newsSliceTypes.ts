export interface newsSliceTypes {
  currentPage: number;
  news: any[];
  isLoading: boolean | null;
  status: "pending" | "resolved" | "rejected" | null;
  error: string | null | undefined;
  flag: boolean;
}
