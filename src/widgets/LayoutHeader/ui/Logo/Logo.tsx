import { Typography } from "@mui/material";
import { HOME_URL } from "../../../../app";
import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export function Logo() {
  return (
    <Typography
      variant="h5"
      component={Link}
      to={HOME_URL}
      color="inherit"
      sx={{ flexGrow: 1, textDecoration: "none" }}
    >
      USERNAME API
    </Typography>
  );
}
