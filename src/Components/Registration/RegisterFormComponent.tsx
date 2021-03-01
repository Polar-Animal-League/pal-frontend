/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { TextField, Typography, Link, Button } from '@material-ui/core';

export const RegisterFormComponent = function (): JSX.Element {
    const [username, setUn] = useState('');
    const [password, setPass] = useState('');
    const [confirmation, setConf] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        console.log('clicked');
        e.preventDefault();

        if (validateForm()) {
            const submitSuccess: boolean = await submitForm();
        }
    };

    const validateForm = function (): boolean {
        return true;
    };

    async function submitForm(): Promise<boolean> {
       const rawResponse = await fetch('http://localhost:8080/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: username, password: password, email: email})
            });
        const content = await rawResponse.json();
        console.log(content);
        return true;
    }

    return (
        <div id="formDiv">
            <form id="registerForm" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setUn(e.target.value);
                    }}
                    id="uUserInput"
                    label="Username"
                    variant="outlined"
                    name="username"
                    type="text"
                />

                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setEmail(e.target.value);
                    }}
                    id="uEmailInput"
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                />

                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setPass(e.target.value);
                    }}
                    id="uPasswordInput"
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    placeholder="*****"
                />

                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setConf(e.target.value);
                    }}
                    id="uPasswordConfInput"
                    label="Password Confirmation"
                    variant="outlined"
                    name="password"
                    type="password"
                    placeholder="*****"
                />

                <Typography>
                    <Link href="/register">Already have an account? Login.</Link>
                </Typography>
                <Button variant="contained" type="submit" color="primary">
                    Register
                </Button>
            </form>
        </div>
    );
};
