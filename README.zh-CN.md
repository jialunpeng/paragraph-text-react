## 即时工具-在线markdown编辑器，给您所见即所得的编辑体验！<div align="center">

[English](./README.md) | 简体中文

</div>

# 特征

## TypeScript 友好

所有组件都是用 TypeScript 编写的，所以天然的类型友好。

# 安装
以npm 包形式提供

```shell
// with npm
npm install paragraph-text-react

// with yarn
yarn add paragraph-text-react

// with pnpm
pnpm add paragraph-text-react

```

# 示例

## 基础使用
```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={'长文本'} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
```

## 按需加载

### 使用 babel-plugin-import

#### 1. 安装
```shell
npm i babel-plugin-import -D
```
#### 2. 添加配置：组件和样式的按需加载
在 babel 配置中加入：
```ts
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: 'paragraph-text-react',
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      style: true, // 样式按需加载
    },
  ],
];
```


## 默认开启单行超出隐藏
```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={'长文本'} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## 开启多行超出隐藏，比如2行

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={'长文本'} lineClamp={2} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## 单行超出隐藏并支持复制

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={'长文本'} copyable={true} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## 开启多行超出隐藏并支持复制

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={'长文本'} lineClamp={2} copyable={true} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## 默认开启内容智能识别
> intelligentRecognition: false 关闭内容识别

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={'https://github.com/'} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## 开启富文本识别

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={<strong>富文本识别</strong>} rich={true} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## 默认开启超出隐藏后鼠标悬浮气泡展示全部
> isToolTip: false 关闭气泡显示
 position: 气泡位置设置

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/style/index.css';

function App() {
  return (
    <ParagraphText text={'默认开启超出隐藏鼠标悬浮气泡展示全部'} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```