import { HTMLInputTypeAttribute } from "react";

export type FormMeta = {
  title: string;
  child: (FormFieldMeta | FormMeta)[];
};

export type FormFieldMeta = TextFormMeta | NumberFormMeta | RadioFormMeta;

type TextInputType = Extract<HTMLInputTypeAttribute, "text">;

export type TextFormMeta = {
  name: string;
  label: string;
  type: TextInputType;
  placeholder?: string;
};

type NumberInputType = Extract<HTMLInputTypeAttribute, "number">;

export type NumberFormMeta = {
  name: string;
  label: string;
  type: NumberInputType;
  placeholder?: string;
};

type RadioInputType = Extract<HTMLInputTypeAttribute, "radio">;

export type RadioFormMeta = {
  name: string;
  label: string;
  type: RadioInputType;
  direct?: "col" | "row";
  options: { label: string; value: string }[];
};
