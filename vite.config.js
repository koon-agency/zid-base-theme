import { defineConfig } from 'vite'

export default defineConfig({
    publicDir: 'theme/assets',
    mode: 'production',
    build: {
        minify: true,
        lib: {
            entry: ["./src/app.js"],
            name: "app",
            formats: ['es'],
            fileName: (format, entryName) => `${entryName}.js`
        },
        outDir: 'assets'
    }
});