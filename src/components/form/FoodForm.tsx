import { TForm } from "@/types";
import { FormProvider, useForm } from "react-hook-form";

const FoodForm = ({ onSubmit, children }: TForm) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FoodForm;
