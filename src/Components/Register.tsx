import React from "react"
type RegisterProps = {

}

interface RegisterState  {
    username:string,
    password:string,
    email:string,
}

const styles = {
    foobar : {
        color: "red",
        display: "hidden"
    }
}
export default class RegisterComponent<RegisterProps, RegisterState> extends React.Component {
    constructor(props : RegisterProps) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
     // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
     state = {
            username : "",
            password: "",
            confirm_password: "",
            email: "",
        }
   

    public render() : JSX.Element {
        return (
            <form id="card">
                <p>Username</p>
                <input onChange={this.handleChange} id="uNameInput" name="username" type="text"/>

                <p>Email Address</p>
                <input onChange={this.handleChange} id="uEmailInput" name="email" type="email" placeholder="your-email@example.com"/>

                <p>Password*</p>
                <input onChange={this.handleChange} id="uPasswordInput" name="password" type="password" placeholder="Your Password"/>

                <p>Retype Password</p>
                <input onChange={this.handleChange} id="uPasswordValidateInput" name="confirm_password" type="password" placeholder="Your Password"/>

                <p id="invalidInputError" style={styles.foobar}></p>
                <span className="br"></span>  
                <small>*(Make sure it is at least 8 letters long, and contains one number and one capital letter)</small>
                
                <input type="submit" id="submitButton" value="Submit"/>  
            </form>
        )
    }

    // public handleSubmit() {

    // }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public handleChange(event: { target: { name: any; value: any; }; }) : void{
        this.setState({
            ...this.state,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
}