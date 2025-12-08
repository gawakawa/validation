import { type Schema, validated } from "./core.ts";
import { minLength, required } from "./validators.ts";

export type UserForm = {
  name: string;
  email: string;
};

const schema: Schema<UserForm> = {
  name: [required, minLength(3)],
  email: [required],
};

export const createUserForm = (): UserForm =>
  validated<UserForm>({ name: "", email: "" }, schema);
