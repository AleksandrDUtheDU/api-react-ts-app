import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL_FILMS, API_KEY } from "../apiKeys/apiKeys";
import { Film } from "../store/model/IApiFilmsResponse";

interface SearchToIdResponce {
  data: Film;
  externalId: {
    imdbId: string | null;
  };
}

export const filmAPIFilm = createApi({
  reducerPath: "filmAPIFilm",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_FILMS,
    headers: {
      "X-API-KEY": API_KEY,
    },
  }),
  endpoints: (build) => ({
    fetchIDFilm: build.query<SearchToIdResponce, string>({
      query: (path: string) => ({
        url: `/${path}`,
      }),
      // transformResponse: (
      //   response: { result: { data: SearchToIdResponce } },
      //   meta
      // ) => response.result.data,
    }),
  }),
});

export const { useFetchIDFilmQuery } = filmAPIFilm;
