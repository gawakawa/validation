import type { Validator } from "./core.ts";

export const required: Validator = {
  validate: (v) => typeof v === "string" && !!v.trim(),
  error: "Required",
};

export const minLength = (min: number): Validator => ({
  validate: (v) => typeof v === "string" && v.length >= min,
  error: `Min ${min} chars`,
});
