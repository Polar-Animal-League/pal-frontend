import { Button, TextField, Typography, Link } from '@material-ui/core';
import history from '../History';

interface PageProps {
    handleSubmit(e: React.FormEvent<HTMLFormElement>);
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPass: React.Dispatch<React.SetStateAction<string>>;
}

export const LoginComponent = function (props: PageProps): JSX.Element {
    return (
        <div id="loginDiv">
            <h2 className="palHeader2">Logohere PAL</h2>
            <form id="loginForm" onSubmit={props.handleSubmit}>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        props.setEmail(e.target.value);
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
                        props.setPass(e.target.value);
                    }}
                    id="uPasswordInput"
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="text"
                    placeholder="*****"
                />

                <Typography>
                    <Link
                        onClick={(e: React.MouseEvent<HTMLElement>): void => {
                            e.preventDefault();
                            history.push('/register');
                        }}
                    >
                        Don't have an account? Click here to register.
                    </Link>
                </Typography>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    );
};
