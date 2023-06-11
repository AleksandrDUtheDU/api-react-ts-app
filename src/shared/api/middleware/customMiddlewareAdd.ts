import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { Middleware } from "@reduxjs/toolkit";
import { addSearchHistory } from "../../firebase";

export const customMiddlewareAddHistory: Middleware =
  () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    if (action.type === "filmAPI/executeQuery/fulfilled") {
      console.log(action);
      addSearchHistory({
        time: new Date().toString(),
        serarchItem: action.payload.keyword,
      });
    }

    return next(action);
  };
