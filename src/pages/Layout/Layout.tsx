import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { LayoutHeader } from "../../widgets/LayoutHeader";
import { LayoutFooter } from "../../widgets/LayoutFooter";

export function Layout() {
  return (
    <>
      <LayoutHeader />
      <Container sx={{ mt: 10 }} maxWidth="lg">
        <Outlet />
      </Container>
      <LayoutFooter />
    </>
  );
}
