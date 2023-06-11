import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./AppRouter/AppRouter";
import { store } from "../shared/api/store/store";
import { AppThemeProvider } from "../shared/theme";
import { AppAuthProvider } from "../shared/firebase";
import ErrorBoundary from "./AppRouter/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <AppAuthProvider>
        <Provider store={store}>
          <AppThemeProvider>
            <RouterProvider router={router} />
          </AppThemeProvider>
        </Provider>
      </AppAuthProvider>
    </ErrorBoundary>
  );
};

export { App };
