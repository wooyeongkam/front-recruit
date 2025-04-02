import { Button } from "@/shared/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { CAMERA_FORM_META } from "../constants";
import { FormField } from "@/shared/components/form/ui/form-field";
import { Form } from "@/shared/components/ui/form";
import { FormMeta } from "@/shared/components/form/types";
import { cameraSettingSchema } from "../schemas";
import { ConfirmModal } from "./confirm-modal";
import { useState } from "react";

export const CameraTab = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof cameraSettingSchema>>({
    resolver: zodResolver(cameraSettingSchema),
    shouldFocusError: true,
  });

  const onSubmit = () => setOpen(true);
  const onError: SubmitErrorHandler<z.infer<typeof cameraSettingSchema>> = (error) => {
    console.log(error);
  };

  return (
    <div className="flex justify-center p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)} className="flex w-md flex-col space-y-8">
          <p className="text-lg font-bold">{CAMERA_FORM_META.title}</p>

          <div className="flex w-full flex-col items-center space-y-12">
            <FormFields fieldsMeta={CAMERA_FORM_META.child} />
            <Button className="w-full">Submit</Button>
          </div>
        </form>
      </Form>

      <ConfirmModal open={open} onOpenChange={setOpen} settings={form.getValues()} />
    </div>
  );
};

const FormFields = ({ fieldsMeta }: { fieldsMeta: FormMeta["child"] }) => {
  const { control } = useFormContext();

  return (
    <>
      {fieldsMeta.map((meta) => {
        if ("name" in meta) {
          return <FormField key={meta.name} meta={meta} control={control} />;
        }

        if ("child" in meta) {
          return (
            <div key={meta.title} className="flex w-full flex-col space-y-4">
              <p className="font-bold">{meta.title}</p>
              <div className="flex w-full flex-col space-y-6">
                <FormFields fieldsMeta={meta.child} />
              </div>
            </div>
          );
        }

        return null;
      })}
    </>
  );
};
