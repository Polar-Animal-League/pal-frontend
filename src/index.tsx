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
// import './index.css';
import App from './App';
import RegisterComponent from "./Components/Register"

ReactDOM.render(
  <React.StrictMode>
    <RegisterComponent />
  </React.StrictMode>,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
