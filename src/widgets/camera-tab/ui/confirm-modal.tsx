import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { z } from "zod";
import { cameraSettingSchema } from "../schemas";
import { Button } from "@/shared/components/ui/button";
import { getJsonString } from "@/shared/lib/get-json-string";

interface ConfirmModalProps extends DialogProps {
  settings: z.infer<typeof cameraSettingSchema>;
}

export const ConfirmModal = (props: ConfirmModalProps) => {
  const { settings, ...modalProps } = props;

  return (
    <Dialog {...modalProps}>
      <DialogContent className="max-h-11/12 overflow-scroll">
        <DialogHeader>
          <DialogTitle>Camera Parameter</DialogTitle>
        </DialogHeader>

        <pre className="whitespace-pre-wrap">{getJsonString(settings, null, 4)}</pre>

        <DialogFooter>
          <div className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
