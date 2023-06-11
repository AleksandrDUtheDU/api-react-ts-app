export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}
interface IFilmSearch {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  type?: string;
  year: number | string;
  description?: string;
  filmLength: string;
  countries?: Country[];
  genres?: Genre[];
  rating: string | null;
  ratingVoteCount?: number;
  posterUrl: string;
  posterUrlPreview?: string;
}

interface IFilmID {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  webUrl?: string;
  posterUrl: string;
  posterUrlPreview?: string;
  year: number | string;
  filmLength: string;
  slogan?: string | null;
  description?: string;
  type?: string;
  ratingMpaa?: string;
  ratingAgeLimits?: number;
  premiereRu?: string | null;
  distributors?: string;
  premiereWorld?: string | null;
  premiereDigital?: string | null;
  premiereWorldCountry?: string | null;
  premiereDvd?: string | null;
  premiereBluRay?: string | null;
  distributorRelease?: string;
  countries?: Country[];
  genres?: Genre[];
}

export interface Film extends IFilmID, IFilmSearch {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  year: string | number;
  filmLength: string;
  rating: string | null;
  posterUrl: string;
  countries?: Country[];
  genres?: Genre[];
  posterUrlPreview?: string;
  ratingChange?: null | number;
  ratingVoteCount?: number;
  [key: string]: unknown;
}

export interface ApiFilmsResponse {
  pagesCount?: number;
  films: Film[];
}
