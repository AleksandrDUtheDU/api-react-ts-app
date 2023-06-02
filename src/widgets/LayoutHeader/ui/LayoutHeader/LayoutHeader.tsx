import { Button, AppBar, Box, Toolbar, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../app/pathRouter";
import { Logo } from "../Logo/Logo";
import { ButtonSwitchTheme } from "../../../../shared/theme";

export function LayoutHeader() {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "primary.main" }} position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <Logo />
            <Box>
              <Button
                component={Link}
                to={ROUTES.LOGIN_URL}
                color="inherit"
                startIcon={<LoginIcon />}
                sx={{ marginLeft: 1, fontSize: 16 }}
              >
                Вход
              </Button>
              <Button
                component={Link}
                to={ROUTES.REGIST_URL}
                color="inherit"
                startIcon={<AccountCircleIcon />}
                sx={{ marginLeft: 1, fontSize: 16 }}
              >
                Регистрация
              </Button>
              <ButtonSwitchTheme />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
