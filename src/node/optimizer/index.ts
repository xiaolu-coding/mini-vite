// 需要引入的依赖
import path from "path"

export async function optimize(root: string) {
  // 1. 确定入口
  const entry = path.resolve(root, "src/main.tsx")
  // 2. 从入口处扫描依赖
  // 3. 预构建依赖
}
