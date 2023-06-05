import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter/AppRouter";
import { AppThemeProvider } from "../shared/theme";

const App = () => {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
};

export { App };
