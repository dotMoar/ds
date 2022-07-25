import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// import external from "rollup-plugin-peer-deps-external";
// import { terser } from "rollup-plugin-terser";
// import generateDeclarations from 'rollup-plugin-generate-declarations';
// import { babel } from "@rollup/plugin-babel";

import packageJson from "./package.json";

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
      commonjs(),
      typescript({ tsconfig : "./tsconfig.json"}),
      // postcss(),
      // babel({
      //   sourceMap: true,
      //   exclude: ["node_modules/**", "src/stories/**"],
      //   presets: [["@babel/preset-react", { "runtime": "automatic" }]],
      // }),
      // external(),
      // generateDeclarations(),
      // resolve(),
      // terser(),
    ],
    // external: ['react', 'react-dom', 'bootstrap'],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()]
  }
];