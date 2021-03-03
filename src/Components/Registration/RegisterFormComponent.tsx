/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TextField, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { React } from 'react';

interface PageProps {
    handleSubmit(e: React.FormEvent<HTMLFormElement>);
    setUn: React.Dispatch<React.SetStateAction<string>>;
    setPass: React.Dispatch<React.SetStateAction<string>>;
    setConf: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}
export const RegisterFormComponent = function (props: PageProps): JSX.Element | null {
    return (
        <div id="formDiv">
            <form id="registerForm" onSubmit={props.handleSubmit}>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        props.setUn(e.target.value);
                    }}
                    id="uUserInput"
                    label="Username"
                    variant="outlined"
                    name="username"
                    type="text"
                />

                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        props.setEmail(e.target.value);
                    }}
                    id="uEmailInput"
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                />

                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        props.setPass(e.target.value);
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
                        props.setConf(e.target.value);
                    }}
                    id="uPasswordConfInput"
                    label="Password Confirmation"
                    variant="outlined"
                    name="password"
                    type="password"
                    placeholder="*****"
                />

                <Typography>
                    <Link to="/login">Already have an account? Login.</Link>
                </Typography>
                <Button variant="contained" type="submit" color="primary">
                    Register
                </Button>
            </form>
        </div>
    );
};
