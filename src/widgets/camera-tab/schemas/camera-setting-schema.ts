import { z } from "zod";

export const schema = z.object({
  ship_type: z.union(
    [
      z.literal("container"),
      z.literal("bulk_carrier"),
      z.literal("LNGC"),
      z.literal("PCTC"),
      z.literal("naval"),
      z.literal("passenger"),
    ],
    {
      message: "Invalid ship type",
    }
  ),
  ship_name: z.string({ message: "Invalid ship name" }).min(1, { message: "Invalid ship name" }),
  call_sign: z.string({ message: "Invalid call sign" }).min(1, { message: "Invalid ship name" }),
  engine: z.union([z.literal("single"), z.literal("twin")], { message: "Invalid engine type" }),
  length: z.number({ message: "Invalid length" }),
  beam: z.number({ message: "Invalid beam" }),
  draft: z.number({ message: "Invalid draft" }),
  cam_fx: z.number({ message: "Invalid text" }).array().length(3, { message: "Please Enter All Position" }),
  cam_fy: z.number({ message: "Invalid text" }).array().length(3, { message: "Please Enter All Position" }),
  cam_cx: z.number({ message: "Invalid text" }).array().length(3, { message: "Please Enter All Position" }),
  cam_cy: z.number({ message: "Invalid text" }).array().length(3, { message: "Please Enter All Position" }),
  rpy: z.number().array().length(9),
});
