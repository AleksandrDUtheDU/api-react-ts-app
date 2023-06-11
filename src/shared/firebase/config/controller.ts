import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import { Film } from "../../api/store/model/IApiFilmsResponse";

import { app } from "./fairbase";

interface SearchItem {
  time: string;
  serarchItem: any;
}

export const db = getFirestore(app);

export const searchCollection = collection(db, "search");

export const favoriteCollection = collection(db, "favorite");

export const addSearchHistory = async (searchData: SearchItem) => {
  const newSerarchItem = await addDoc(searchCollection, { ...searchData });
};

export const addFavoriteFilm = async (searchData: Film) => {
  const newSerarchItem = await addDoc(favoriteCollection, { ...searchData });
};

export const deleteFavoriteFilm = async (id: string) => {
  const document = doc(db, `hotels/${id}`);
  await deleteDoc(document);
};
