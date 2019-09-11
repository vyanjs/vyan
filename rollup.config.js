import { rollup } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import gzipPlugin from 'rollup-plugin-gzip';

export default [{
    input: 'src/index.js',
    output: {
        file: 'dist/vyan.js',
        format: 'umd',
        freeze: false,
        name: 'vyan',
        sourcemap:true
    },
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            main: true,
            modulesOnly: true,
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: ["@babel/plugin-proposal-export-default-from"]
        })
    ]
},
{
    input: 'src/index.js',
    output: {
        file: 'dist/vyan.min.js',
        format: 'umd',
        freeze: false,
        name: 'vyan',
        sourcemap:false
    },
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            main: true,
            modulesOnly: true,
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: ["@babel/plugin-proposal-export-default-from"]
        }),
        terser()
    ]
},
{
    input: 'src/index.js',
    output: {
        file: 'dist/vyan.min.js',
        format: 'umd',
        freeze: false,
        name: 'vyan',
        sourcemap:false
    },
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            main: true,
            modulesOnly: true,
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: ["@babel/plugin-proposal-export-default-from"]
        }),
        terser(),
        gzipPlugin()
    ]
}
];