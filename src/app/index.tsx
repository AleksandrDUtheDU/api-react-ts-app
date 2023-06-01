import { BrowserRouter } from "react-router-dom";
import { Routing } from "./AppRouter/AppRouter";
import { HOME_URL, LOGIN_URL, REGIST_URL } from "./AppRouter/pathRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export { App, LOGIN_URL, HOME_URL, REGIST_URL };
