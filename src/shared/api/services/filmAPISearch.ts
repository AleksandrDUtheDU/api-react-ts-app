import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL_FILMS, API_KEY } from "../apiKeys/apiKeys";

import { Film } from "../store/model/IApiFilmsResponse";

interface SearchToStringResponce {
  keyword: string;
  pagesCount: number;
  films: Film[];
  searchFilmsCountResult: number;
}

export const filmAPISearch = createApi({
  reducerPath: "filmAPISearch",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_FILMS,
    headers: {
      "X-API-KEY": API_KEY,
    },
  }),
  endpoints: (build) => ({
    fetchToStringFilm: build.query<SearchToStringResponce, [string, number]>({
      query: ([name, page]) => ({
        url: `/search-by-keyword`,
        params: {
          keyword: name,
          page: page,
        },
      }),
    }),
  }),
});

export const { useFetchToStringFilmQuery } = filmAPISearch;
