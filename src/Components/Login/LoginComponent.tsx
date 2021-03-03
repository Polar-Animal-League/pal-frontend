import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Typography, Link } from '@material-ui/core';
import * as Auth from '../../Auth/auth';

export const LoginComponent = function (): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    return (
        <div id="loginDiv">
            <h2 className="palHeader2">Logohere PAL</h2>
            <form id="loginForm">
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setEmail(e.target.value);
                    }}
                    id="uEmailInput"
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    placeholder="your-email@example.com"
                />

                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setEmail(e.target.value);
                    }}
                    id="uPasswordInput"
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="text"
                    placeholder="*****"
                />

                <Typography>
                    <Link href="/register">Don't have an account? Click here to register.</Link>
                </Typography>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    );
};
