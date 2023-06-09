import { useContext } from "react";
import { UserContext } from "../model/AppAuthProvider/AppAuthProvider";

export const useUserAuth = () => {
  return useContext(UserContext);
};
