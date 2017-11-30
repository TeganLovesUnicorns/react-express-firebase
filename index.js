import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import express from 'express';
import * as fs from 'fs';
import * as functions from 'firebase-functions';
import path from 'path';

// import main react app below.

import App from './src/App';

const resolvedIndex = path.join(__dirname, 'index.template.html');

const index = fs.readFileSync((resolvedIndex), 'utf-8');

const context = {};

const app = express();

app.get('**', (req, res) => {

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context} >
      <App />
    </StaticRouter>);

  const finalHtml = index.replace('<!-- ::APP:: -->', html);
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(finalHtml);
});

export let ssrApp = functions.https.onRequest(app);
