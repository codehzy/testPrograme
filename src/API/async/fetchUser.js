/**
 * 获取用户信息
 */

export const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "hzy",
        age: 24,
      });
    }, 1000);
  });
};
