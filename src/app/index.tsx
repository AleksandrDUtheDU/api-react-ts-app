import { BrowserRouter } from "react-router-dom";
import { Routing } from "./AppRouter/AppRouter";
import { ROUTES } from "./AppRouter/pathRouter";
import { AppThemeProvider } from "../shared/theme";

const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export { App, ROUTES };
