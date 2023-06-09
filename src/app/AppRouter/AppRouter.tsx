import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { MainPage } from "../../pages/MainPage/MainPage";
import { AuthReg, AuthSingIn } from "../../widgets/AuthForm";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { ROUTES } from "../pathRouter";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.HOME_URL}
      element={<Layout />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<MainPage />} />
      <Route path={ROUTES.LOGIN_URL} element={<AuthSingIn />} />
      <Route path={ROUTES.REGIST_URL} element={<AuthReg />} />
      <Route
        path={ROUTES.FAVORITS}
        element={
          <ProtectedRoute>
            <h1>Избранное</h1>{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.SEARCH_HISTORY}
        element={
          <ProtectedRoute>
            <h1>История запросов</h1>{" "}
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.ERROR} element={<ErrorPage />} />
    </Route>
  )
);
