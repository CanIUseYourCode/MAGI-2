import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import { MAGI_TESTS } from './src/data/magiTests.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ALLOWED_MEDIA_IDS = new Set<string>();
for (const item of MAGI_TESTS) {
  ALLOWED_MEDIA_IDS.add(item.outputVideoId);
  if (item.muxedVideoId) ALLOWED_MEDIA_IDS.add(item.muxedVideoId);
  if (item.sourceVideoId) ALLOWED_MEDIA_IDS.add(item.sourceVideoId);
  if (item.audioRefId) ALLOWED_MEDIA_IDS.add(item.audioRefId);
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT ?? 3000);
  const isProd = process.env.NODE_ENV === 'production';

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.get('/api/media/:fileId', async (req, res) => {
    const { fileId } = req.params;
    if (!ALLOWED_MEDIA_IDS.has(fileId)) {
      res.status(404).json({ error: 'Media file not found' });
      return;
    }

    const upstreamUrl = `https://drive.usercontent.google.com/download?id=${encodeURIComponent(fileId)}&export=download&confirm=t`;
    const headers: Record<string, string> = {};
    if (typeof req.headers.range === 'string') {
      headers.Range = req.headers.range;
    }

    const controller = new AbortController();
    req.on('close', () => controller.abort());

    try {
      const upstream = await fetch(upstreamUrl, {
        headers,
        signal: controller.signal,
      });

      if (!upstream.ok && upstream.status !== 206) {
        res.status(upstream.status).json({ error: 'Upstream media error' });
        return;
      }

      res.status(upstream.status);
      const passthroughHeaders = [
        'content-type',
        'content-length',
        'content-range',
        'accept-ranges',
      ];
      for (const name of passthroughHeaders) {
        const val = upstream.headers.get(name);
        if (val) res.setHeader(name, val);
      }
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Cache-Control', 'public, max-age=86400');

      if (!upstream.body) {
        res.end();
        return;
      }

      const nodeStream = Readable.fromWeb(
        upstream.body as unknown as import('node:stream/web').ReadableStream
      );
      nodeStream.on('error', () => {
        if (!res.headersSent) {
          res.status(502).end();
        } else {
          res.destroy();
        }
      });
      nodeStream.pipe(res);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      if (!res.headersSent) {
        res.status(502).json({ error: 'Failed to stream media' });
      }
    }
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      const indexFile = path.join(distDir, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Build output not found');
      }
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer();
