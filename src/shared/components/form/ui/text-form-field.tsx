import { FormControl, FormItem, FormLabel, FormMessage, FormField } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { NumberFormMeta, TextFormMeta } from "../types";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  meta: TextFormMeta | NumberFormMeta;
  control: Control<T>;
}

export const TextFormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const { meta, control } = props;

  return (
    <FormField
      key={meta.name}
      name={meta.name as Path<T>}
      control={control}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="font-bold">{meta.label}</FormLabel>
          <FormControl>
            <Input
              placeholder={meta.placeholder}
              type={meta.type}
              {...field}
              onChange={(e) => {
                if (meta.type === "number") {
                  field.onChange(e.target.valueAsNumber);
                } else {
                  field.onChange(e.target.value);
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
