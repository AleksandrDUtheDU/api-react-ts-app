import { ApiFilmsResponse } from "./IApiFilmsResponse";

export interface FilmsState extends ApiFilmsResponse {
  // ок?
  isLoading: boolean;
  error: string;
}
