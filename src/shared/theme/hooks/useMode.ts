import { useState, useMemo } from "react";
import { Theme, createTheme } from "@mui/material";
import { themeSettings } from "../model/ThemeSettings/themeSettings";

interface ColorMode {
  toggleColorMode: () => void;
}

export const useMode = (): [Theme, ColorMode] => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode: ColorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme: Theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
