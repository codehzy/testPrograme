import { sum } from "./sum";

// .not 修饰符允许你测试结果不等于某个值的情况
test("adds 1 + 2 ! equal 5", () => {
  expect(sum(1, 2)).not.toBe(5);
});
