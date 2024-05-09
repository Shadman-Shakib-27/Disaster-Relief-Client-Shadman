import { Controller } from "react-hook-form";
import { Input } from "antd";
import { TInput } from "@/types";

const FoodInput = ({ type, name, label, placeholder }: TInput) => {
  return (
    <div className="mb-4">
      <p className="text-lg mb-1">{label ? `${label}` : null}</p>
      <Controller
        name="name"
        render={({ field }) => (
          <Input {...field} type={type} id={name} placeholder={placeholder} />
        )}
      />
    </div>
  );
};

export default FoodInput;
