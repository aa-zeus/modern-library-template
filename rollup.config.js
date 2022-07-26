import typescript from "rollup-plugin-typescript2";

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
  input: ["src/index.ts", "src/curried.ts"],
  output: [
    { format: "cjs", dir: "dist/cjs" },
    { format: "esm", dir: "dist/esm" },
  ],
  plugins: [typescript()],
};
