import { getUserInfo } from "./userInfo";

// .toEqual 匹配器会递归的检查对象所有属性和属性值是否相等，常用来检测引用类型
test("getUserInfo()返回的对象深度相等", () => {
  expect(getUserInfo()).toEqual(getUserInfo());
});

test("getUserInfo()返回的对象内存地址不同", () => {
  expect(getUserInfo()).not.toBe(getUserInfo());
});
