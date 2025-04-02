import { FormMeta } from "@/shared/components/form/types";

export const CAMERA_FORM_META = {
  title: "Camera Parameter",
  child: [
    {
      title: "Ship Information",
      child: [
        { name: "ship_name", label: "Ship name", type: "text", placeholder: "Please enter ship name" },
        { name: "call_sign", label: "Call sign", type: "text", placeholder: "Please enter call sign" },
        {
          name: "ship_type",
          label: "Ship type",
          type: "radio",
          options: [
            { label: "Container", value: "container" },
            { label: "Bulk Carrier", value: "bulk_carrier" },
            { label: "LNGC", value: "LNGC" },
            { label: "PCTC", value: "PCTC" },
            { label: "Naval", value: "naval" },
            { label: "Passenger", value: "passenger" },
          ],
        },
        { name: "length", label: "Length", type: "number", placeholder: "Please enter ship length" },
        { name: "beam", label: "Beam", type: "number", placeholder: "Please enter ship beam" },
        { name: "draft", label: "Draft", type: "number", placeholder: "Please enter ship draft" },
        {
          name: "engine",
          label: "Engine type",
          type: "radio",
          direct: "row",
          options: [
            { label: "Single", value: "single" },
            { label: "Twin", value: "twin" },
          ],
        },
      ],
    },
    {
      title: "Cam Focal Length",
      child: [
        { name: "cam_fx.0", label: "Left X", type: "number", placeholder: "Please enter position" },
        { name: "cam_fy.0", label: "Left Y", type: "number", placeholder: "Please enter position" },
        { name: "cam_fx.1", label: "Center X", type: "number", placeholder: "Please enter position" },
        { name: "cam_fy.1", label: "Center Y", type: "number", placeholder: "Please enter position" },
        { name: "cam_fx.2", label: "Right X", type: "number", placeholder: "Please enter position" },
        { name: "cam_fy.2", label: "Right Y", type: "number", placeholder: "Please enter position" },
      ],
    },
    {
      title: "Cam Principal Length",
      child: [
        { name: "cam_cx.0", label: "Left X", type: "number", placeholder: "Please enter position" },
        { name: "cam_cy.0", label: "Left Y", type: "number", placeholder: "Please enter position" },
        { name: "cam_cx.1", label: "Center X", type: "number", placeholder: "Please enter position" },
        { name: "cam_cy.1", label: "Center Y", type: "number", placeholder: "Please enter position" },
        { name: "cam_cx.2", label: "Right X", type: "number", placeholder: "Please enter position" },
        { name: "cam_cy.2", label: "Right Y", type: "number", placeholder: "Please enter position" },
      ],
    },
    {
      title: "Roll Pitch Yaw",
      child: [
        { name: "rpy.0", label: "Left Roll", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.1", label: "Left Pitch", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.2", label: "Left Yaw", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.3", label: "Center Roll", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.4", label: "Center Pitch", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.5", label: "Center Yaw", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.6", label: "Right Roll", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.7", label: "Right Pitch", type: "number", placeholder: "Please enter scale" },
        { name: "rpy.8", label: "Right Yaw", type: "number", placeholder: "Please enter scale" },
      ],
    },
  ],
} as const satisfies FormMeta;
