import typescript from 'rollup-plugin-typescript2'

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
  input: ['src/index.ts', 'src/curried.ts'],
  output: [
    {
      format: 'cjs',
      sourcemap: true,
      dir: 'dist/cjs',
    },
    {
      format: 'es',
      sourcemap: true,
      dir: 'dist/es',
      entryFileNames: '[name].mjs',
    },
  ],
  plugins: [typescript()],
}
