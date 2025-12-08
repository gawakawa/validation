import { assertEquals, assertThrows } from "@std/assert";
import { createUserForm } from "./form.ts";

Deno.test("rejects short name", () => {
  const form = createUserForm();
  assertThrows(() => {
    form.name = "ab";
  });
});

Deno.test("accepts valid form", () => {
  const form = createUserForm();
  form.name = "Alice";
  form.email = "alice@example.com";
  assertEquals(form.name, "Alice");
  assertEquals(form.email, "alice@example.com");
});
