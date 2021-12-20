import { getIntArray } from "./getIntArray";

// .toThrow 能够让我们测试被测试方法是否按照预期抛出异常

test("getIntArray(3.3)应该抛出错误", () => {
  function getIntArrayWrapFn() {
    getIntArray(3.3);
  }

  expect(getIntArrayWrapFn).toThrow('getIntArray"只接受整数类型的参数');
});
