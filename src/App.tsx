import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { NavbarComponent } from '../src/Components/Navigation/NavbarComponent';
import { RegisterFormComponent } from '../src/Components/Registration/RegisterFormComponent';
import { LoginComponent } from './Components/Login/LoginComponent';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { AuthProvider } from '@ryanar/react-auth-provider';
import * as Auth from '../src/Auth/auth';

function App(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // const [user, setUser] = useState(fetchUser());
    const history = useHistory();

    function handleLogin(): void {
        history.push('/');
    }

    function handleLogout(): void {
        history.push('/login');
    }
    return (
        <AuthProvider onLogin={handleLogin} onLogout={handleLogout}>
            <BrowserRouter>
                <div className="app">
                    <header className="mainHeader">
                        <NavbarComponent id="nav-containerId" className="nav-container" />
                    </header>

                    <div className="container">
                        <Switch>
                            <Route exact path="/register" component={RegisterFormComponent} />
                            <Route exact path="/login" component={LoginComponent} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}
export default App;
