import { get } from 'js-cookie';
import { AuthContext } from '@ryanar/react-auth-provider';
import { useContext, useState } from 'react';

const [user, setUser] = useState(fetchUser());
const { setAuthenticated } = useContext(AuthContext);

type UserType = {
    id?: number;
    username?: string;
    email?: string;
    token?: string;
};

function fetchCookie(): string | null {
    return get('user.token') ?? null;
}

export function fetchUser(): UserType | null {
    if (fetchCookie()) {
        const returnData = {
            id: +(get('user.id') ?? ''),
            username: get('user.username'),
            email: get('user.email'),
            token: get('user.token')
        };
        return returnData;
    }
    return null;
}

export function login(email: string, password: string): void {
    // localhost:8080/user/register
}

export function register(username: string, email: string, password: string): void {
    // localhost:8080/user/register
}

export function logout(username: string, email: string, password: string): void {
    // localhost:8080/user/register
}
