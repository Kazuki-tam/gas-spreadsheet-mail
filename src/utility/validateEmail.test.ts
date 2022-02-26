import { validateEmail } from "./validateEmail";

describe("validateMail test", () => {
  const correctMail = "example@samole.com";
  const invalidMail = "example$sample.com";
  test("Correct email", () => {
    expect(validateEmail(correctMail)).toBe(true);
  });
  test("Invalid email", () => {
    expect(validateEmail(invalidMail)).toBe(false);
  });
});
