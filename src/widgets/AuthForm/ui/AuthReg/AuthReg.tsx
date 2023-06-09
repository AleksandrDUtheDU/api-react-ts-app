import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../../shared/firebase";
import { IAuthFormInput } from "../../model/IAuthFormInput";
import { defaultValues } from "../../model/defaultValues";
import { yupResolverSchema } from "../../lib/yup";

export function AuthReg() {
  const [showPassword, setShowPassword] = useState(false);
  const [fethError, setFethError] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IAuthFormInput>({ defaultValues, resolver: yupResolverSchema });
  const password = watch("password");
  const navigate = useNavigate();
  const { user, createUser } = useUserAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  const onSubmit: SubmitHandler<IAuthFormInput> = async (data) => {
    setFethError("");
    try {
      await createUser(data.email, data.password);
      navigate("/");
    } catch (error) {
      setFethError(getErrorMessage(error));
    }
  };

  return (
    <Container sx={{ mt: 15 }} component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography textTransform="uppercase" component="h1" variant="h5">
          Регистрация
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Почта</InputLabel>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-email"
                  type="text"
                  label="Почта"
                />
              )}
            />
            {errors.email && (
              <Alert severity="error">{errors.email.message}</Alert>
            )}
          </FormControl>

          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Пароль"
                />
              )}
            />
            {errors.password && (
              <Alert severity="error">{errors.password.message}</Alert>
            )}
          </FormControl>
          <FormControl margin="normal" fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password-repeat">
              Повторите пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-repeat"
              type={showPassword ? "text" : "password"}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Повторите пароль"
            />
            {!(password === repeatPassword) && (
              <Alert sx={{ mt: 2 }} severity="error">
                Пароли не совпадают
              </Alert>
            )}
          </FormControl>

          <Button
            disabled={!(password === repeatPassword)}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Регистрация
          </Button>
          {fethError && (
            <Alert sx={{ mt: 2 }} severity="error">
              {fethError}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
}
