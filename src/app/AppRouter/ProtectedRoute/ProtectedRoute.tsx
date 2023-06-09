import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../../../shared/firebase";

export const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return <>{children}</>;
};
