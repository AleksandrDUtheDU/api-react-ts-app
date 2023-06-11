import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./AppRouter/AppRouter";
import { store, persistor } from "../shared/api/store/store";
import { AppThemeProvider } from "../shared/theme";
import { AppAuthProvider } from "../shared/firebase";
import ErrorBoundary from "./AppRouter/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <AppAuthProvider>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <AppThemeProvider>
              <RouterProvider router={router} />
            </AppThemeProvider>
          </Provider>
        </PersistGate>
      </AppAuthProvider>
    </ErrorBoundary>
  );
};

export { App };
