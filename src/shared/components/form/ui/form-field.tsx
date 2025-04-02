import { FormFieldMeta } from "../types";
import { RadioFormField } from "./radio-form-field";
import { Control, FieldValues } from "react-hook-form";
import { TextFormField } from "./text-form-field";

interface FormFieldProps<T extends FieldValues> {
  meta: FormFieldMeta;
  control: Control<T>;
}

export const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const { meta, control } = props;

  if (meta.type === "radio") {
    return <RadioFormField meta={meta} control={control} />;
  }

  return <TextFormField meta={meta} control={control} />;
};
