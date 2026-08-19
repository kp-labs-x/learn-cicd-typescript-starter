import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

const person = {
  isActive: true,
  age: 32,
};

test("getAPIKey returns the API key, () => {
  const headers = {
    authorization: "Apikey banana789",
  };

  const result = getAPIKey(headers);

  expect(result).toBe("banana789);
});

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
