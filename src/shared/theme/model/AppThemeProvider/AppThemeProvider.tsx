import { FC, ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext } from "../ColorModeContext/ColorModeContext";
import { useMode } from "../../hooks/useMode";

export const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
