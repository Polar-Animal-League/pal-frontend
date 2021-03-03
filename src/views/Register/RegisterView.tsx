import React, { useState, useContext } from 'react';
import * as Auth from '../../Auth/auth';
import { AuthContext } from '@ryanar/react-auth-provider';
import { UserContext } from '../../Context/UserContext';
import { RegisterFormComponent } from '../../Components/Registration/RegisterFormComponent';

export const RegisterView = function (): JSX.Element {
    const [username, setUn] = useState('');
    const [password, setPass] = useState('');
    const [confirmation, setConf] = useState('');
    const [email, setEmail] = useState('');

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

    const validateForm = function (): boolean {
        return true;
    };

    async function submitForm(): Promise<boolean> {
        const rawResponse = await Auth.register(username, email, password);
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

    return (
        <RegisterFormComponent
            handleSubmit={handleSubmit}
            setUn={setUn}
            setEmail={setEmail}
            setPass={setPass}
            setConf={setConf}
        />
    );
};
