import react, {useContext, useState} from "react"
import { render } from "react-dom"
import {UserContext} from "../../Context/UserContext"
import {login} from "../../UserConnection/User"
import TextField from "@material-ui/core/TextField"
import {Button} from "@material-ui/core"

export const LoginComponent = function() : JSX.Element {
  
    const [email, setEmail] = useState(""); 
    const [password, setPass] = useState("");

    return (
        <div className="align-center">
            <h2 className="palHeader2">
                Logohere PAL 
            </h2>
            <form id="loginForm">
    
                <TextField onChange = {(e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setEmail(e.target.value);
                }} id="uEmailInput" label="Email" variant="outlined" name="email" type="email" placeholder="your-email@example.com"/>


                 <TextField onChange = {(e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setEmail(e.target.value);
                }} id="uPasswordInput" label="Password" variant="outlined" name="password" type="text" placeholder="*****"/>


                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </form>
        </div>
    )
}