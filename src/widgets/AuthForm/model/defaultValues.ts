import { IAuthFormInput } from "./IAuthFormInput";
import type { DefaultValues } from "react-hook-form";

export const defaultValues: DefaultValues<IAuthFormInput> = {
  email: "",
  password: "",
};
