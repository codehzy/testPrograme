- **所需要安装依赖**

  - **问题一**
    - **怎样使用 jest**
  - 解决问题一
    - npm install --save-dev jest， 配置 package : 新增 script 为 jest
  - **问题二**
    - **不支持 es6 写法，export**
    - nodejs 采用的是 CommonJS 的模块化规范，使用 require 引入模块；而 import 是 ES6 的模块化规范关键字。想要使用 import，必须引入 babel 转义支持，通过 babel 进行编译，使其变成 node 的模块化代码。
  - 解决问题二
    - npm install --save-dev @babel/core @babel/preset-env
    - 根目录加入.babelrc , "presets": ["@babel/preset-env"]
  - **问题三**
    - **jest 是怎么运行的**
  - 解决问题三
    - jest 运行时内部先执行( jest-babel )，检测是否安装 babel-core，然后取 .babelrc 中的配置运行测试之前结合 babel 先把测试用例代码转换一遍然后再进行测试
  - **问题四**
    - **jest 怎样 测试 ts 文件**
  - 解决问题四
    - npm install --save-dev @babel/preset-typescript
    - 配置.babelrc , "presets": ["@babel/preset-env", "@babel/preset-typescript"]
    - 为了解决编辑器对 jest 断言方法的类型报错，如 test、expect 的报错，你还需要安装
    - npm install --save-dev @types/jest
  - **问题五**
    - **怎样持续监听测试**
  - 解决问题五
    - 配置 package.json , **新增**， "test": "jest --watchAll"
  - **问题六**
    - 什么是单元测试覆盖率，怎样显示单元测试覆盖率
  - 解决问题六
    - 加入 jest.config.js

  ```js
  单元测试覆盖率 = 被测代码行数 / 参测代码总行数 * 100%

  ./jest.config.js

  module.exports = {
  // 是否显示覆盖率报告
  collectCoverage: true,
  // 告诉 jest 哪些文件需要经过单元测试测试
  collectCoverageFrom: ['get.ts', 'sum.ts', 'src/utils/**/*'],
  }
  ```

  ```js
  // 设置单元测试覆盖率阈值
  module.exports = {
  collectCoverage: true, // 是否显示覆盖率报告
  collectCoverageFrom: ['get.ts', 'sum.ts', 'src/utils/**/*'], // 告诉 jest 哪些文件需要经过单元测试测试
  coverageThreshold: {
    global: {
      statements: 90, // 保证每个语句都执行了
      functions: 90, // 保证每个函数都调用了
      branches: 90, // 保证每个 if 等分支代码都执行了
    },
  },
  ```

  - **问题七**
    - async await 怎样进行测试
  - 解决问题七
    - @babel/preset-env 不支持 async await 导致的
    - 对 babel 进行配置新增 plugin ， @babel/plugin-transform-runtime
    - "plugins": ["@babel/plugin-transform-runtime"]

浅谈前端单元测试 (https://juejin.cn/post/6844903624301084680)

Jest 官方文档 (https://www.jestjs.cn/docs/getting-started)

学一下前端测试(https://mp.weixin.qq.com/s/Lyu4Bf2wRY6I4pnJuoP8TA)
