import { defineConfig } from 'vite'

export default defineConfig({
    publicDir: 'assets',
    mode: 'production',
    build: {
        minify: true,
        target: ['es2015'],
        lib: {
            entry: ["./src/app.js"],
            name: "app",
            formats: ['es'],
            fileName: (format, entryName) => `${entryName}.js`
        },
        outDir: 'assets'
    }
});