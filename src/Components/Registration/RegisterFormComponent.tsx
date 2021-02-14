/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {useState} from "react"
import {register} from "../../UserConnection/User"

const styles = {
    foobar : {
        color: "red",
        display: "hidden"
    }
}
export const RegisterFormComponent = function() : JSX.Element {
    const [username, setUn] = useState("");
    const [password, setPass] = useState("");
    const [confirmation, setConf] = useState("");
    const [email, setEmail] = useState(""); 
    return (
        <div>
            <form id="card">
                <p>Username</p>
                <input onChange={e => setUn(e.target.value)} id="uNameInput" name="username" type="text"/>

                <p>Email Address</p>
                <input onChange={e => setEmail(e.target.value)} id="uEmailInput" name="email" type="email" placeholder="your-email@example.com"/>

                <p>Password*</p>
                <input onChange={e => setPass(e.target.value)} id="uPasswordInput" name="password" type="password" placeholder="Your Password"/>

                {/* <p>Retype Password</p>
                <input onChange={e => setConf(e.target.value)} id="uPasswordValidateInput" name="confirm_password" type="password" placeholder="Your Password"/> */}

                <p id="invalidInputError" style={styles.foobar}></p>
                <span className="br"></span>  
                <small>*(Make sure it is at least 8 letters long, and contains one number and one capital letter)</small>
                
                <input type="submit" onSubmit = {async (e: React.ChangeEvent<HTMLInputElement>) : Promise<void> => {
                    await register(username, email, password);
                }} id="submitButton" value="Submit"/>  
            </form>
        </div>
    )
}