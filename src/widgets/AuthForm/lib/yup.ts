import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Некорректный email")
      .required("Поле не заполнено"),
    password: yup
      .string()
      .required("Поле не заполнено")
      .min(8, "Пароль должен содержать не менее 8 символов"),
  })
  .required();

export const yupResolverSchema = yupResolver(schema);
