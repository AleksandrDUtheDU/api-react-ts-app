import { Button, AppBar, Box, Toolbar, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { LOGIN_URL, REGIST_URL } from "../../../../app"; // не уверен что понимаю куда их лучше поместить
import { Logo } from "../Logo/Logo";

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
                to={LOGIN_URL}
                color="inherit"
                startIcon={<LoginIcon />}
                sx={{ marginLeft: 1, fontSize: 16 }}
              >
                Вход
              </Button>
              <Button
                component={Link}
                to={REGIST_URL}
                color="inherit"
                startIcon={<AccountCircleIcon />}
                sx={{ marginLeft: 1, fontSize: 16 }}
              >
                Регистрация
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
