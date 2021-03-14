import './App.css';
import { useState, useMemo } from 'react';
import { NavbarComponent } from '../src/Components/Navigation/NavbarComponent';
import { Switch, Route, useHistory } from 'react-router-dom';
import { AuthProvider } from '@ryanar/react-auth-provider';
import { UserContext } from '../src/Context/UserContext';
import { RegisterView } from './views/Register/RegisterView';
import { LoginView } from './views/Login/LoginView';

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
                <div className="app">
                    <header className="mainHeader">
                        <NavbarComponent id="nav-containerId" className="nav-container" />
                    </header>

                    <div className="container">
                        <Switch>
                            <Route exact path="/register" component={RegisterView} />

                            <Route exact path="/login" component={LoginView} />
                        </Switch>
                    </div>
                </div>
            </AuthProvider>
        </UserContext.Provider>
    );
}
export default App;
