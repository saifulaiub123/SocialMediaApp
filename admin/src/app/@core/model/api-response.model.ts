export interface ApiResponse<T> {
  data: T |any;
  isSuccess: boolean;
  statusCode : number;
  message : string;
}

export interface PaginatedApiResponse<T> extends ApiResponse<T> {
  totalRecords : number;
}
