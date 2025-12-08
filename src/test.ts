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

Deno.test("rejects empty name", () => {
  const form = createUserForm();
  assertThrows(() => {
    form.name = "";
  });
});

Deno.test("accepts exactly 3 chars name", () => {
  const form = createUserForm();
  form.name = "abc";
  assertEquals(form.name, "abc");
});

Deno.test("error message is correct", () => {
  const form = createUserForm();
  assertThrows(
    () => {
      form.name = "";
    },
    Error,
    "Required",
  );
  assertThrows(
    () => {
      form.name = "ab";
    },
    Error,
    "Min 3 chars",
  );
});
