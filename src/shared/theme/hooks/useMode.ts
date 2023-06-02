import { useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { themeSettings } from "../model/ThemeSettings/themeSettings";

export const useMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
