import './App.css';
import React, { useState, useMemo } from 'react';
import { NavbarComponent } from '../src/Components/Navigation/NavbarComponent';
import { RegisterFormComponent } from '../src/Components/Registration/RegisterFormComponent';
import { LoginComponent } from './Components/Login/LoginComponent';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { AuthProvider } from '@ryanar/react-auth-provider';
import * as Auth from '../src/Auth/auth';
import { UserContext } from '../src/Context/UserContext';
import { RegisterView } from './views/Register/RegisterView';

function App(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/ban-types
    const [user, setUser] = useState<{} | null>(null);

    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    const history = useHistory();

    function handleLogin(): void {
        history.push('/');
    }

    function handleLogout(): void {
        history.push('/login');
    }
    return (
        <UserContext.Provider value={providerValue}>
            <AuthProvider onLogin={handleLogin} onLogout={handleLogout}>
                <BrowserRouter>
                    <div className="app">
                        <header className="mainHeader">
                            <NavbarComponent id="nav-containerId" className="nav-container" />
                        </header>

                        <div className="container">
                            <Switch>
                                <Route exact path="/register" component={RegisterView} />

                                <Route exact path="/login" component={LoginComponent} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </AuthProvider>
        </UserContext.Provider>
    );
}
export default App;
