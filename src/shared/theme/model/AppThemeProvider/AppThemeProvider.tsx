import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext } from "../ColorModeContext/ColorModeContext";
import { useMode } from "../../hooks/useMode";
import { iReactNode } from "./iReactNode";

export function AppThemeProvider({ children }: iReactNode) {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
