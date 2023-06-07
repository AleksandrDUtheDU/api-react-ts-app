import { FilmsResponse } from "./IFilmResponse";

export interface FilmsState extends FilmsResponse {
  // ок?
  isLoading: boolean;
  error: string;
}
