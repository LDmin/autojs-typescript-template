### 特性

使用 webpack 打包 npm 包 和 typescript

1. 使用 typescript 开发 Pro 8
   - 普通的 ts 文件，使用 ts-loader 转换
   - 编写 ui 的 tsx 使用 autojs-ui-loader
2. 可以使用 npm 包
3. 代码编译时会编译成 ES3
4. 根据文件入口，打包成不同的项目文件，便于复用代码

### 步骤

1. 下载模板

```
	git clone git@github.com:LDmin/autojs-typescript-template.git
```

2. 安装

```
npm i
```

3. 启动

```
npm run watch
```

4. 调试
   参考 .vscode/launch.json 里，main 可设置调试文件入口, 然后按 F5 启动调试

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "autojs",
      "request": "launch",
      "stopOnEntry": true,
      "device": "[recent]",
      "name": "[Auto.js Pro调试]使用最近设备",
      "main": "dist/main.bundle.js"
    }
  ]
}
```

### Q&A

1. 入口文件在哪？
   在 src/main 文件夹下的每一个 ts 文件(不包括文件夹下的文件)都是独立的入口文件，会打包到 dist 文件夹下。
2. 为何使用 tsx 文件编写 ui ？
   符合 tsx 代码检查。
3. 如何使用 npm 包？
   跟普通项目一样安装及使用 npm 包，比如例子： src/main/example/rx.ts
