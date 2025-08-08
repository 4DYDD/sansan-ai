/* eslint-disable */
// Server Next.js untuk lingkungan cPanel Node.js App
// - Jalankan: node app.js (atau npm start)
// - Wajib build dulu: npm run build (akan membuat folder .next)
// - cPanel biasanya mengatur PORT via env var; kita gunakan itu.

const http = require('http');
const next = require('next');

// Paksa ke production agar Next menggunakan output build
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Gunakan PORT dari env (cPanel biasanya set otomatis), default 3000
const port = Number(process.env.PORT) || 3000;
// Bind ke semua interface jika HOST tidak diset (cPanel friendly)
const bindHost = (process.env.HOST && String(process.env.HOST)) || '0.0.0.0';
// Tampilkan URL ramah untuk lokal (0.0.0.0 tidak bisa dibuka langsung di browser)
const displayHost = bindHost === '0.0.0.0' ? 'localhost' : bindHost;

// dev=false agar menggunakan hasil build (bukan dev server)
const app = next({ dev: false, hostname: bindHost, port });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = http.createServer((req, res) => {
            // Delegasikan semua request ke Next (termasuk API routes)
            handle(req, res);
        });

            server.listen(port, bindHost, () => {
                console.log(`Sansan AI listening on http://${displayHost}:${port} (bound to ${bindHost}, NODE_ENV=${process.env.NODE_ENV})`);
                console.log('Tip: open the displayed URL above. If using PowerShell, set PORT via:  $env:PORT=4000; node app.js');
            });
    })
    .catch((err) => {
        console.error('❌ Failed to start Next server:', err);
        process.exit(1);
    });
