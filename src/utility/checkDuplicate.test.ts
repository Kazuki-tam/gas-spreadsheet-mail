import { checkDuplicate } from "./checkDuplicate";

describe("checkDuplicate test", () => {
  const correctArray = [
    "example@gmail.com",
    "example2@gmail.com",
    "example@gmail.com",
    "exampl4@gmail.com",
    "exampl4@gmail.com",
  ];

  const invalidArray = [
    "example@gmail.com",
    "example2@gmail.com",
    "example3@gmail.com",
    "exampl4@gmail.com",
    "exampl5@gmail.com",
  ];

  test("Correct email list", () => {
    expect(checkDuplicate(correctArray)).toStrictEqual([
      "example@gmail.com",
      "exampl4@gmail.com",
    ]);
  });

  test("Invalid email list", () => {
    expect(checkDuplicate(invalidArray)).toStrictEqual([]);
  });
});
