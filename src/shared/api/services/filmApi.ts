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

interface SearchToStringResponce {
  keyword: string;
  pagesCount: number;
  films: {
    filmId: number;
    nameRu: string;
    nameEn: string;
    type: string;
    year: string;
    description: string;
    filmLength: string;
    countries: {
      country: string;
    }[];
    genres: {
      genre: string;
    }[];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
  }[];
  searchFilmsCountResult: number;
}

export const filmAPI = createApi({
  reducerPath: "filmAPI",
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
      transformResponse: (
        response: { result: { data: SearchToIdResponce } },
        meta
      ) => response.result.data,
    }),
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

export const { useFetchIDFilmQuery, useFetchToStringFilmQuery } = filmAPI;
