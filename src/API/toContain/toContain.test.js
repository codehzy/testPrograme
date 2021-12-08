// .toContain 匹配对象中是否包含
import { names } from "./toContain";

test("匹配对象是否包含", () => {
  expect(names).toContain("jim");
});

//  拓展API
// toBeNull 仅匹配 null
// toBeUndefined 仅匹配 undefined
// toBeDefined 与…相反 toBeUndefined
// toBeTruthy 匹配 if 语句视为 true 的任何内容
// toBeFalsy 匹配 if 语句视为 false 的任何内容

// 检查数字类型（number）
// toBeGreaterThan 大于
// toBeGreaterThanOrEqual 至少（大于等于）
// toBeLessThan 小于
// toBeLessThanOrEqual 最多（小于等于）
// toBeCloseTo 用来匹配浮点数（带小数点的相等）

const number = 123.2;

test("检测是否浮点数是否相等", () => {
  expect(number).toBeCloseTo(123.2);
});
