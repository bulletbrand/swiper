import { NextServer } from 'next/dist/server/next';
import express from 'express';

import bodyParser from 'body-parser';

export default async function nextWatchServer(app: NextServer) {
  await app.prepare();
  const handle = app.getRequestHandler();

  const router = express();

  router.use(bodyParser.urlencoded({ extended: true }));

  router.get('/about', function (req, res) {
    return app.render(req, res, '/aboutPage');
  });

  router.get('*', (req, res) => {
    return handle(req, res);
  });
  router.listen(4200, () => {
    // eslint-disable-next-line no-console
    console.log('> Ready on http://localhost:4200');
  });
}
