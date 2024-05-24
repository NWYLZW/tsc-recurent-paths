import dts from 'rollup-plugin-dts'

export default {
    input: {
        index: './src/index.ts',
        a: './src/a.ts',
        b: './src/b.ts'
    },
    output: [
        { dir: 'dist' },
        {
          dir: 'dist',
          entryFileNames: ({ name }) => `${name.replace(/^src\//, '')}.esm.d.ts`,
          preserveModules: true
        }
    ],
    plugins: [
        dts({ tsconfig: './tsconfig.json' }),
    ]
}
