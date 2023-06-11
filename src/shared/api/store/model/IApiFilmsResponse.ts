export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}

export interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  year: string;
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
