import { fetchUser } from "./fetchUser";

// @babel/preset-env 不支持 async await 导致的,需要安装babel插件，@babel/plugin-transform-runtime
// npm install --save-dev @babel/plugin-transform-runtime

test("fetchUser() 可以请求到一个用户名字为 moji", async () => {
  const data = await fetchUser();

  expect(data.name).toBe("moji");
});
