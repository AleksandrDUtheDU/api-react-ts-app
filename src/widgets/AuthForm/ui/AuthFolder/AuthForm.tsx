import { useState, FC } from "react";
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
} from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { IAuthFormInput } from "../../model/IAuthFormInput";
import { defaultValues } from "../../model/defaultValues";
import { yupResolverSchema } from "../../lib/yup";

export const AuthForm: FC<{ name: string }> = ({ name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthFormInput>({ defaultValues, resolver: yupResolverSchema });

  const onSubmit: SubmitHandler<IAuthFormInput> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
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
        {name}
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
            <Typography sx={{ mt: 1 }} color={red[500]} component="p">
              {errors.email.message}
            </Typography>
          )}
        </FormControl>

        <FormControl margin="normal" fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
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
            <Typography sx={{ mt: 1 }} color={red[500]} component="p">
              {errors.password.message}
            </Typography>
          )}
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {name}
        </Button>
      </Box>
    </Box>
  );
};
