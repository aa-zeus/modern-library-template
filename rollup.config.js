import typescript from '@rollup/plugin-typescript'

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
      entryFileNames: '[name].cjs',
    },
    {
      format: 'es',
      sourcemap: true,
      dir: 'dist/es',
    },
  ],
  plugins: [typescript()],
}
