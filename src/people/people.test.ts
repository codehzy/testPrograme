import { peopleName } from "./people";

test("isEqual", () => {
  expect(peopleName("hello")).toBe("hello");
});
