import { useLocation } from "react-router-dom";

export const useCurrentPathArr = () => {
  const { pathname } = useLocation();
  return pathname.substr(1).split("/");
};
