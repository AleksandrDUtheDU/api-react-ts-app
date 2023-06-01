import { Route, Routes } from "react-router-dom";
import { Layout } from "../../pages/Layout/Layout";
import { HOME_URL, LOGIN_URL, REGIST_URL } from "./pathRouter";

export function Routing() {
  return (
    <Routes>
      <Route path={HOME_URL} element={<Layout />}>
        <Route index element={<div>Основное MAIN</div>} />
        <Route path={LOGIN_URL} element={<div>AuthForm LOGIN</div>} />
        <Route path={REGIST_URL} element={<div>AuthForm REGIST</div>} />
      </Route>
    </Routes>
  );
}
