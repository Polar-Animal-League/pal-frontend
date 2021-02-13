import React, {useState} from "react";
import {
  Link
} from "react-router-dom";
import { LoginTabComponent } from "./LoginTabComponent";
import { UserTabComponent } from "./UserTabComponent";

interface AuthProps {
    isLoggedIn: boolean,
    userId?: number
    userName?: string,
}

export const LogOrUserComponent = function(props: AuthProps) : JSX.Element {
    if (props.isLoggedIn) {
        return <UserTabComponent userId={1} userName="foobar"/>
    } else {
        return <LoginTabComponent/>
    }
}