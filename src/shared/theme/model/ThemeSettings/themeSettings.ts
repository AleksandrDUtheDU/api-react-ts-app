export const themeSettings: any = (mode: string) => {
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
