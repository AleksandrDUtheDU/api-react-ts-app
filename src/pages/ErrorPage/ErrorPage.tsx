import { Container, Typography } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Неизвестая ошибка...";
  }

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Ошибка!
      </Typography>
      <Typography component="p" gutterBottom>
        Не удалось найти страницу.
      </Typography>
      <Typography component="p" gutterBottom>
        {errorMessage}
      </Typography>
    </Container>
  );
};
