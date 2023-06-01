import { BrowserRouter } from "react-router-dom";
import { Routing } from "./AppRouter/AppRouter";
import { ROUTES } from "./AppRouter/pathRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export { App, ROUTES };
