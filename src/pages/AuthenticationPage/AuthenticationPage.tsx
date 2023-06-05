import { Container } from "@mui/material";
import { AuthForm } from "../../widgets/AuthForm/ui/AuthFolder/AuthForm";
import { ROUTES } from "../../app/pathRouter";
import { useCurrentPathArr } from "../../shared/hooks/useCurrentPathArr";

export function AuthenticationPage() {
  const name = useCurrentPathArr();

  let nameAuthForm = "вход";
  if (name[name.length - 1] === ROUTES.LOGIN_URL) {
    nameAuthForm = "вход";
  } else if (name[name.length - 1] === ROUTES.REGIST_URL) {
    nameAuthForm = "регистрация";
  }

  return (
    <Container sx={{ mt: 15 }} component="main" maxWidth="sm">
      <AuthForm name={nameAuthForm} />
    </Container>
  );
}
