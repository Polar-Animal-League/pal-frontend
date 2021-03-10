import { get } from 'js-cookie';

export async function login(email: string, password: string): Promise<Response> {
    return fetch('http://api.play-pal.gg/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email: email, password: password })
    }).then(async (response) => response);
}

export async function register(
    username: string,
    email: string,
    password: string
): Promise<Response> {
    return fetch('http://api.play-pal.gg/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ username: username, email: email, password: password })
    }).then(async (response) => response);
}

export function logout(username: string, email: string, password: string): void {
    // localhost:8080/user/register
}
