import { Route, Routes } from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { ROUTES } from "../pathRouter";

export function Routing() {
  return (
    <Routes>
      <Route path={ROUTES.HOME_URL} element={<Layout />}>
        <Route index element={<div>Основное MAIN</div>} />
        <Route
          path={ROUTES.LOGIN_URL}
          element={<div>AuthenticationPage</div>}
        />
        <Route
          path={ROUTES.REGIST_URL}
          element={<div>AuthenticationPage2</div>}
        />
      </Route>
    </Routes>
  );
}
