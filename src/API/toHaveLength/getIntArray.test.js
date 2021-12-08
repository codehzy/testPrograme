import { getIntArray } from "./getIntArray";

//.toHaveLength 可以很方便的用来测试字符串和数组类型的长度是否满足预期

test("getIntArray(3)返回的数组长度应该为", () => {
  expect(getIntArray(3)).toHaveLength(3);
});
