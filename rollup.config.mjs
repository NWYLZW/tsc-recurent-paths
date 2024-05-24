import dts from 'rollup-plugin-dts'

export default {
    input: {
        index: './src/index.ts',
        a: './src/a.ts',
        b: './src/b.ts'
    },
    output: [
        { dir: 'dist' }
    ],
    plugins: [
        dts({ tsconfig: './tsconfig.json' }),
    ]
}
