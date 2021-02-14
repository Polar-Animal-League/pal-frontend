// import * as mollify from 'mollify';
// import * as http from 'http';
// import { Express } from 'express-serve-static-core';
// import * as express from 'express';
// import * as chalk from 'chalk';

// process.on('SIGINT', () => process.exit(1));

// const app: Express = express();
// const server = http.createServer(app);

// const port = +(process.env['PORT'] ?? '1337');
// const ip = process.env['IP'] ?? '0.0.0.0';
// const rootPath = __dirname + process.env['ROOT'] ?? '/www';
// app.use(
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     mollify({
//         dir: rootPath,
//         is: true // default
//     })
// );

// app.use(express.static(rootPath));

// server.listen(port, ip);
// console.log(chalk.green(`Server listening on port ${port}`));


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {UserContext} from "../src/Context/UserContext"


ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={null}>
      <App/>
    </UserContext.Provider>
  </React.StrictMode>,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  document.getElementById('root')
);