import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import history from './Components/History';
import { Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App />
        </Router>
    </React.StrictMode>,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    document.getElementById('root')
);
