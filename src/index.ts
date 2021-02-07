import * as mollify from 'mollify';
import * as http from 'http';
import { Express } from 'express-serve-static-core';
import * as express from 'express';

const app: Express = express();
const server = http.createServer(app);

const port = +(process.env['PORT'] ?? '1337');
const ip = process.env['IP'] ?? '0.0.0.0';
const rootPath = __dirname + process.env['ROOT'] ?? 'www';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(mollify({
    dir: rootPath,
    is: true // default
}));

app.use(express.static(rootPath));

server.listen(port, ip);