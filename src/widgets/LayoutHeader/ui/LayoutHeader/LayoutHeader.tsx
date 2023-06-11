import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Container,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../app/pathRouter";
import { Logo } from "../Logo/Logo";
import { ButtonSwitchTheme } from "../../../../shared/theme";
import { useMathes } from "../../../../shared/theme/hooks/useMathes";
import { useUserAuth } from "../../../../shared/firebase";

export function LayoutHeader() {
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { matchesMobile } = useMathes();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logout();
    setAnchorElUser(null);
    navigate("/");
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "primary.main" }} position="fixed">
        <Container maxWidth="lg">
          <Toolbar sx={{ paddingLeft: 0, paddingRight: 0 }}>
            <Logo />
            <Button
              component={Link}
              to={ROUTES.SEARCH_PAGE_URL}
              color="inherit"
              sx={{ marginLeft: 1, fontSize: 16 }}
            >
              ПОИСК
            </Button>
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    component={Link}
                    to={ROUTES.FAVORITS_PAGE_URL}
                  >
                    <Typography textAlign="center">Избранное</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    component={Link}
                    to={ROUTES.SEARCH_HISTORY_PAGE_URL}
                  >
                    <Typography textAlign="center">
                      История просмотров
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Выход</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box>
                <Button
                  component={Link}
                  to={ROUTES.LOGIN_URL}
                  color="inherit"
                  startIcon={<LoginIcon />}
                  sx={{ fontSize: 14 }}
                >
                  {matchesMobile ? "" : "Вход"}
                </Button>
                <Button
                  component={Link}
                  to={ROUTES.REGIST_URL}
                  color="inherit"
                  startIcon={<AccountCircleIcon />}
                  sx={{ fontSize: 14 }}
                >
                  {matchesMobile ? "" : "Регистрация"}
                </Button>
              </Box>
            )}

            <ButtonSwitchTheme />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
