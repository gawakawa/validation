import type { Validator } from "./core.ts";

export const required: Validator<string> = {
  validate: (v) => !!v.trim(),
  message: "Required",
};

export const minLength = (min: number): Validator<string> => ({
  validate: (v) => v.length >= min,
  message: `Min ${min} chars`,
});
