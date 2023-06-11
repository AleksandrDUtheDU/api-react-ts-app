import { ApiFilmsResponse } from "./IApiFilmsResponse";

export interface FilmsState extends ApiFilmsResponse {
  isLoading: boolean;
  error: string;
}
