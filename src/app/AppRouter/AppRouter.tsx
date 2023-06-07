import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { MainPage } from "../../pages/MainPage/MainPage";
import { AuthenticationPage } from "../../pages/AuthenticationPage/AuthenticationPage";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { ROUTES } from "../pathRouter";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.HOME_URL}
      element={<Layout />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<MainPage />} />
      <Route path={ROUTES.LOGIN_URL} element={<AuthenticationPage />} />
      <Route path={ROUTES.REGIST_URL} element={<AuthenticationPage />} />
      <Route path={ROUTES.ERROR} element={<ErrorPage />} />
    </Route>
  )
);
