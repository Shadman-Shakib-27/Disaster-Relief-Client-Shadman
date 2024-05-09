import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TInput = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
};

export type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};
