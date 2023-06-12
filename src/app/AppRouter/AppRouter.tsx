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
import { ROUTES } from "../pathRouter";
import MainPage from "../../pages/MainPage/MainPage";

const SearchHistoryPage = lazy(
  () => import("../../pages/SearchHistoryPage/SearchHistoryPage")
);
const SearchPage = lazy(() => import("../../pages/SearchPage/SearchPage"));
const FilmInfoPage = lazy(() => import("../../pages/FilmInfo/FilmInfo"));
//const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const FavoritsPage = lazy(
  () => import("../../pages/FavoritsPage/FavoritsPage")
);

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
          // <Suspense fallback={<div>Loading...</div>}>
          //   <MainPage />
          // </Suspense>
          <MainPage />
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
            <Suspense fallback={<div>Loading...</div>}>
              <FavoritsPage />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.SEARCH_HISTORY_PAGE_URL}
        element={
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchHistoryPage />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.ERROR} element={<ErrorPage />} />
    </Route>
  )
);
