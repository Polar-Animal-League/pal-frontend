
import {get} from "js-cookie";

type UserType = {
    id?: number,
    username?: string,
    email?: string,
    token?: string 
}
function fetchCookie() : string | null {
    return get('user.token') ?? null;
}
export function fetchUser(): UserType | null {
    if (fetchCookie()) {
        const returnData = {
            id: +(get('user.id') ?? ""),
            username: get('user.username'),
            email: get('user.email'),
            token: get('user.token')
        }    
        return returnData;
    }
    return null
}

export function login() : void {

}