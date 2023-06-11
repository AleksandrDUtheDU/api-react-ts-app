import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL_FILMS, API_KEY } from "../apiKeys/apiKeys";

interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string;
  webUrl: string;
  posterUrl: string;
  posterUrlPreview: string;
  year: number;
  filmLength: string;
  slogan: string | null;
  description: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: number;
  premiereRu: string | null;
  distributors: string;
  premiereWorld: string | null;
  premiereDigital: string | null;
  premiereWorldCountry: string | null;
  premiereDvd: string | null;
  premiereBluRay: string | null;
  distributorRelease: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  facts: any[];
  seasons: any[];
}

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
