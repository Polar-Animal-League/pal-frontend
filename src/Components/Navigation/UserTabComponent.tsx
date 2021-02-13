import React, {useState} from "react";
import {
  Link
} from "react-router-dom";

interface UserTabProps {
    userId: number
    userName: string
}

export const UserTabComponent = function(props: UserTabProps) : JSX.Element {
    return (
         <li className="navbar-item">
            <Link to="/users/">{props.userName}</Link>
        </li>
    )
}