# autojs-typescript-template

使用 typescript 开发 autojs

### 分支

- master 包含一些示例项目
- template 一个纯净的 autojs8 模板, 可用于初始化项目

### 安装

```
npm install
```

#### 或者使用 yarn

```
yarn
```

### 启动

```
npm run watch
```

### 打包

在 dist 目录下的 xxx.bundle.js 文件, 使用 autojs 打包成 apk 即可。

### 特色功能

- [x] webpack 打包，使用 typescript 开发，可以使用众多 node 包
- [x] 通过不同的文件入口，打包成不同的项目
- [x] 通过 tsx 编写 ui layout

### 要做的事

- [x] 把 autojs-ui-loader 发布到 npm 包, 在线安装

### 说明

1. 目录结构
   .
   ├── .vscode
   │   ├── launch.json 配置入口
   │   └── settings.json 工作区设置
   ├── dist 打包后的文件夹
   │   ├── assets 打包后的资源
   │   │   └── 1.txt
   │   ├── main.bundle.js 所有项目打包后的 js
   │   └── mihoyo.bundle.js 单个项目打包后的 js
   ├── README.md
   ├── dist 打包后的文件夹
   │   ├── assets 打包后的资源
   │   │   └── 1.txt
   │   ├── main.bundle.js 所有项目打包后的 js
   │   └── mihoyo.bundle.js 单个项目打包后的 js
   ├── src
   │   ├── assets 资源文件，会直接复制到 dist/assets
   │   │   └── 1.txt
   │   ├── base (可选) 放置基础类
   │   │   └── project.ts
   │   ├── main 项目入口, 自动扫描 main 文件夹下的文件作为入口文件
   │   │   ├── main.ts 所有项目的入口
   │   │   └── mihoyo.ts 单个项目的入口
   │   └── utils 工具函数
   │   └── index.ts
   ├── tsconfig.json
   ├── webpack.config.js
   └── yarn.lock

2. 关于项目调试入口

- 默认为 dist/main.bundle.js, 可在 .vscode/launch.json 修改入口
