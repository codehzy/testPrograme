import { getUserInfo } from "./userInfo";

// /.toMatch 传入一个正则表达式，它允许我们来进行字符串类型的正则匹配

test("getUserInfo().name 应该包含 moj", () => {
  expect(getUserInfo().name).toMatch(/moj/i);
});
