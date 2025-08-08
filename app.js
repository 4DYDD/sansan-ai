/* eslint-disable */
// Server Next.js untuk lingkungan cPanel Node.js App
// - Jalankan: node app.js (atau npm start)
// - Wajib build dulu: npm run build (akan membuat folder .next)
// - cPanel biasanya mengatur PORT via env var; kita gunakan itu.

const http = require('http');
const next = require('next');

// Paksa ke production agar Next menggunakan output build
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const port = parseInt(process.env.PORT, 10) || 3000;
// Di sebagian hosting perlu 0.0.0.0 agar bisa di-bind dari luar
const hostname = process.env.HOST || '0.0.0.0';

// dev=false agar menggunakan hasil build (bukan dev server)
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = http.createServer((req, res) => {
            // Delegasikan semua request ke Next (termasuk API routes)
            handle(req, res);
        });

        server.listen(port, hostname, () => {
            console.log(`Sansan AI running on http://${hostname}:${port} (NODE_ENV=${process.env.NODE_ENV})`);
        });
    })
    .catch((err) => {
        console.error('❌ Failed to start Next server:', err);
        process.exit(1);
    });
