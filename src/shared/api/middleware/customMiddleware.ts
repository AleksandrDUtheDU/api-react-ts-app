import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { filmsSlice } from "../store/redusers/FilmsSlise";

export const customMiddleware =
  () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    if (filmsSlice.actions) {
      localStorage.setItem("films", JSON.stringify(action.payload));
    }
    return next(action);
  };
