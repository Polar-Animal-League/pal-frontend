import {createContext} from "react"

type UserType = {
    id?: number,
    username?: string,
    email?: string,
    token?: string 
}
export const UserContext = createContext<UserType | null>(null);