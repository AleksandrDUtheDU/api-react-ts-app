import { useEffect } from "react";
import { useAppDispath } from "./useAppDispath";
import { useUserAuth } from "../firebase";
import { addToHistory } from "../api/store/redusers/HistorySlise/FavoriteSlise";
import { IHistoryItem } from "../api/services/IHistoryItem";

export const useLocalSorageHistory = () => {
  const dispatch = useAppDispath();
  const { user } = useUserAuth();

  useEffect(() => {
    if (user?.email) {
      const localHistory = localStorage.getItem(`${user.email}/history`);
      if (localHistory) {
        const history: IHistoryItem[] = JSON.parse(localHistory);
        history.forEach((item) => {
          dispatch(addToHistory(item));
        });
      }
    }
  }, [user, dispatch]);
};
