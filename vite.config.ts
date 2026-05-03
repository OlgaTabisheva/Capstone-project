import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    base: './',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'src/index.html',
                about: 'src/html/about.html',
                cart: 'src/html/cart.html',
                catalog: 'src/html/catalog.html',
                contact: 'src/html/contact.html',
                userLogIn: 'src/html/userLogIn.html',
            },
        },
    },
});
