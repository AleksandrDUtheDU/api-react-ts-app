import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { auth } from "../../firebase/config/fairbase";

export const IsAuthMiddleware =
  () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    const actions = new Set();
    actions.add("favorites/addToFavorite");
    actions.add("favorites/removedFromFavorite");
    const isAuthAction = actions.has(action.type) && !auth.currentUser;
    if (isAuthAction) {
      alert("Необходимо зарегестрироваться!");
      return null;
    }
    next(action);
  };
