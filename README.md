# LeUI 模板

[![Node.js Version](https://img.shields.io/badge/node.js-=_18.20.3-green.svg?style=flat-square)](https://www.npmjs.org/package/commander)
![Vue 3.4](https://img.shields.io/badge/vue-3.4.31-42b883?style=flat&logo=vue.js)
![Vite 5.3](https://img.shields.io/badge/vite-v5.3.3-blue)
![vite@5.3.3](https://img.shields.io/badge/vite-v5.3.3-brightgreen)

这个模板可以帮助你开始在 Vite 中使用 Vue 3 进行开发

## 推荐的 IDE 设置


由于 TypeScript 无法处理 .vue 导入的类型信息，它们默认被简化为通用的 Vue 组件类型。在大多数情况下，如果你不在意模板之外的组件属性类型，这样处理是可以的。

但是，如果你希望在 .vue 导入中获得实际的属性类型（例如在使用手动 h(...) 调用时进行属性验证），你可以在 VS Code 命令面板中运行 Volar: Switch TS Plugin on/off。

自定义配置
请参阅 Vite 配置参考。

项目设置

[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (并禁用 Vetur).

## 在 TS 中对 .vue 导入的类型支持

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VS Code command palette.

由于 TypeScript 无法处理 .vue 导入的类型信息，它们默认被简化为通用的 Vue 组件类型。在大多数情况下，如果你不在意模板之外的组件属性类型，这样处理是可以的。

但是，如果你希望在 .vue 导入中获得实际的属性类型（例如在使用手动 h(...) 调用时进行属性验证），你可以在 VS Code 命令面板中运行 Volar: Switch TS Plugin on/off。


## 自定义配置

请参阅 Vite [配置参考](https://vitejs.dev/config/).

## 安装依赖

```sh
npm install
```

### 开发、编译和热重载

```sh
npm run dev
```

### 本地开发 + whistle 代理调试

请在 whistle 中配置 rules

```
hr.oa.fenqile.com localhost:3000
m.oa.fenqile.com  localhost:3000
```


### 生产环境类型检查、编译和压缩

```sh
npm run build
```
