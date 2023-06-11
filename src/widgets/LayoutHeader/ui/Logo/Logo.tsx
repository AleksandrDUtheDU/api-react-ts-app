import { Typography } from "@mui/material";
import { ROUTES } from "../../../../app/pathRouter";
import { Link } from "react-router-dom";
import { useMathes } from "../../../../shared/theme/hooks/useMathes";

export function Logo() {
  const { matchesMobile } = useMathes();

  return (
    <Typography
      variant="h5"
      component={Link}
      to={ROUTES.HOME_URL}
      color="inherit"
      sx={{ flexGrow: 1, textDecoration: "none" }}
    >
      {matchesMobile ? "ФК" : "ФИЛЬМОПОИСК"}
    </Typography>
  );
}
