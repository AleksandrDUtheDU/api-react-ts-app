import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import * as fairbase from "firebase/app";
import { firebaseConfig } from "../shared/firebase/config/fairbaseKeys";
import { router } from "./AppRouter/AppRouter";
import { store } from "../shared/api/store/store";
import { AppThemeProvider } from "../shared/theme";
import { AppAuthProvider } from "../shared/firebase";

fairbase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Provider store={store}>
      <AppAuthProvider>
        <AppThemeProvider>
          <RouterProvider router={router} />
        </AppThemeProvider>
      </AppAuthProvider>
    </Provider>
  );
};

export { App };
