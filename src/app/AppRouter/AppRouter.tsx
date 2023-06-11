import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { AuthReg, AuthSingIn } from "../../widgets/AuthForm";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { SearchHistoryPage } from "../../pages/SearchHistoryPage/SearchHistoryPage";
import { ROUTES } from "../pathRouter";

const SearchPage = lazy(() => import("../../pages/SearchPage/SearchPage"));
const FilmInfoPage = lazy(() => import("../../pages/FilmInfo/FilmInfo"));
const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.HOME_URL}
      element={<Layout />}
      errorElement={<ErrorPage />}
    >
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.FILM_URL}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <FilmInfoPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SEARCH_PAGE_URL}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SearchPage />
          </Suspense>
        }
      />

      <Route path={ROUTES.LOGIN_URL} element={<AuthSingIn />} />
      <Route path={ROUTES.REGIST_URL} element={<AuthReg />} />
      <Route
        path={ROUTES.FAVORITS_PAGE_URL}
        element={
          <ProtectedRoute>
            <h1>Избранное</h1>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.SEARCH_HISTORY_PAGE_URL}
        element={
          <ProtectedRoute>
            <SearchHistoryPage />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.ERROR} element={<ErrorPage />} />
    </Route>
  )
);
