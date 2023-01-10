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

开发依赖预构建功能

> 确定预构建入口 首先是确定入口，为了方便理解，这里我直接约定为 src 目录下的main.tsx文件:

```ts
// 需要引入的依赖
import path from "path";

// 1. 确定入口
const entry = path.resolve(root, "src/main.tsx");
```
