import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { RadioFormMeta } from "../types";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/shared/lib/utils";

interface RadioFormFieldProps<T extends FieldValues> {
  meta: RadioFormMeta;
  control: Control<T>;
}

export const RadioFormField = <T extends FieldValues>(props: RadioFormFieldProps<T>) => {
  const { meta, control } = props;

  return (
    <FormField
      control={control}
      name={meta.name as Path<T>}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="font-bold">{meta.label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn(meta.direct === "row" ? "flex space-x-1" : "flex flex-col space-y-1")}
            >
              {meta.options.map(({ label, value }) => (
                <FormItem key={value} className="flex items-center space-y-0 space-x-3">
                  <FormControl>
                    <RadioGroupItem value={value} />
                  </FormControl>
                  <FormLabel className="font-normal">{label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
