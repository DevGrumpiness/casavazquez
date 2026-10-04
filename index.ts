import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { vinos } from "./data/vinos";
import { sommelierHandler } from "./sommelier";

const app = express();
// Cloud Run sits behind a proxy; needed so req.ip is the guest's address for rate limiting.
app.set('trust proxy', 1);
app.use(cors());
const port = parseInt(process.env.PORT || '8080', 10);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'website', 'dist');

const assetCacheRegex = /\.(?:js|css|woff2?|ttf|otf|png|jpe?g|gif|webp|svg|mp4|json)$/i;

app.get('/api/vinos', (req, res) => {
    res.json(vinos);
});

app.post('/api/sommelier', express.json({ limit: '10kb' }), sommelierHandler);

app.use(express.static(distPath, {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('index.html')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        } else if (assetCacheRegex.test(filePath)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
    }
}));

app.get('*', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
