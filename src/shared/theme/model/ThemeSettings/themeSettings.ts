type ThemeMode = "light" | "dark";

type ThemeSettings = {
  palette: {
    mode: ThemeMode;
    primary: {
      main: string;
    };
  };
};

type ThemeSettingsFunction = (mode: ThemeMode) => ThemeSettings;

export const themeSettings: ThemeSettingsFunction = (mode: ThemeMode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#757575",
            },
          }
        : {
            primary: {
              main: "#1976d2",
            },
          }),
    },
  };
};
