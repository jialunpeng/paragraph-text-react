<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# Features

## TypeScript friendly

All components are written in TypeScript so it's type friendly.

# Installation
Available as an npm package

```shell
// with npm
npm install paragraph-text-react

// with yarn
yarn add paragraph-text-react

// with pnpm
pnpm add paragraph-text-react

```

# examples

## Default: Enable single-line overflow hiding
```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/css/index.min.css';

function App() {
  return (
    <ParagraphText text={'Long text'} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## Enable multi-line overflow hiding, e.g., 2 lines

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/css/index.min.css';

function App() {
  return (
    <ParagraphText text={'Long text'} lineClamp={2} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## Single-line overflow hiding with copy support

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/css/index.min.css';

function App() {
  return (
    <ParagraphText text={'Long text'} copyable={true} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## Multi-line overflow hiding with copy support

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/css/index.min.css';

function App() {
  return (
    <ParagraphText text={'Long text'} lineClamp={2} copyable={true} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## Default: Enable content intelligent recognition
> intelligentRecognition: false Disable content recognition

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/css/index.min.css';

function App() {
  return (
    <ParagraphText text={'https://github.com/'} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## Enable rich text recognition

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/css/index.min.css';

function App() {
  return (
    <ParagraphText text={<strong>rich text recognition</strong>} rich={true} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```

## Default: Show full content in a hover bubble when overflow is hidden
> isToolTip: false Disable bubble display
 position: Bubble position settings

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { ParagraphText } from 'paragraph-text-react';
import 'paragraph-text/dist/css/index.min.css';

function App() {
  return (
    <ParagraphText text={'Default: Show full content in a hover bubble when overflow is hidden'} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

```