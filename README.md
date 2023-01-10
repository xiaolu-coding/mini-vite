# 依赖预构建

optimizer文件夹存放依赖预构建的逻辑

```ts
// src/node/optimizer/index.ts

export async function optimize(root: string) {
  // 1. 确定入口
  // 2. 从入口处扫描依赖
  // 3. 预构建依赖
}
```

然后在服务入口引入预构建的逻辑

```ts
// src/node/server/index.ts

import connect from "connect";
import { blue, green } from "picocolors";
+ import { optimize } from "../optimizer/index";

export async function startDevServer() {
  const app = connect();
  const root = process.cwd();
  const startTime = Date.now();
  app.listen(3000, async () => {
+   await optimize(root);

    console.log(
      green("🚀 No-Bundle 服务已经成功启动!"),
      `耗时: ${Date.now() - startTime}ms`
    );
    console.log(`> 本地访问路径: ${blue("http://localhost:3000")}`);
  });
}

```
