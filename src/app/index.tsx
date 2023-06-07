import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./AppRouter/AppRouter";
import { store } from "../shared/api/store/store";
import { AppThemeProvider } from "../shared/theme";

const App = () => {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </Provider>
  );
};

export { App };
