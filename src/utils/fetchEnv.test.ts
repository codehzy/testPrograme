import { fetchEnv } from "./fetchEnv";

describe("fetchEnv", () => {
  it("判断是否 dev 环境", () => {
    expect(fetchEnv("https://www.baidu.dev.com/")).toBe("dev");
  });

  it("判断是否 test 环境", () => {
    expect(fetchEnv("https://www.baidu.test.com/")).toBe("test");
  });

  it("判断是否 pre 环境", () => {
    expect(fetchEnv("https://www.baidu.pre.com/")).toBe("pre");
  });

  it("判断是否 prod 环境", () => {
    expect(fetchEnv("https://www.baidu.prod.com/")).toBe("prod");
  });

  it("判断是否 prod 环境", () => {
    expect(fetchEnv("https://www.baidu.com/")).toBe("prod");
  });
});
