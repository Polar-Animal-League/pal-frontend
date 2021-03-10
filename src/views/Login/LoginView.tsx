import { LoginComponent } from '../../Components/Login/LoginComponent';
import { useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { AuthContext } from '@ryanar/react-auth-provider';
import * as Auth from '../../Auth/auth';

export const LoginView = function (): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const context = useContext(UserContext);
    if (!context) {
        return null;
    }

    const { user, setUser } = context;
    const { setAuthenticated } = useContext(AuthContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (validateForm()) {
            const submitSuccess: boolean = await submitForm();
            if (submitSuccess) {
                // Redirect somewhere
            }
        }
    };

    async function submitForm(): Promise<boolean> {
        const rawResponse = await Auth.login(email, password);
        if (rawResponse.status === 409) {
            // Conflict error do something with the Component
        } else if (rawResponse.status === 200) {
            const responseJson = await rawResponse.json();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            setUser(responseJson.data);
            setAuthenticated(true);
            return true;
        }
        return false;
    }

    const validateForm = function (): boolean {
        return true;
    };

    return <LoginComponent handleSubmit={handleSubmit} setEmail={setEmail} setPass={setPass} />;
};
