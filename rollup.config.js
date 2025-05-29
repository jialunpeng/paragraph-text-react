// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  // 构建代码（ES/CommonJS 格式）
  {
    input: 'components/index.tsx',
    output: [
      { file: 'dist/esm/index.js', format: 'es' },
      { file: 'dist/cjs/index.js', format: 'cjs' },
    ],
    plugins: [
      typescript(),
      postcss({
        modules: true, // 启用 CSS Modules
        use: [['less', { javascriptEnabled: true }]], // 使用 Less 处理
      }),
    ],
    external: ['react', 'react-dom'],
  },
  // 构建类型声明（.d.ts）
  {
    input: 'components/index.tsx',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
