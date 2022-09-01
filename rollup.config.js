import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss"
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';

import packageJson from "./package.json";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      PeerDepsExternalPlugin(),
      typescript({ 
        tsconfig : "./tsconfig.json",
        exclude: [
          "src/stories",
          "**/*.stories.tsx",
          "**/__tests__", 
          "src/stories/**", 
          "**/__snapshots__"
        ]
      }),
      babel({
        // babelrc: false,
        // plugins: [['import', { libraryName: 'antd', style: true }]],
        // extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // exclude: /\**node_modules\**/,
    },
    ),
      postcss(),
      {
            babelrc: false,
            plugins: [['import', { libraryName: 'antd', style: true }]],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: /\**node_modules\**/,
        }
    ],
    external: ['react', 'react-dom']
  },
  {
    input: "dist/esm/index.js",
    output: [{file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];