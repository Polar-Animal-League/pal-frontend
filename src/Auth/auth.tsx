import { get } from 'js-cookie';

export function login(email: string, password: string): void {
    // localhost:8080/user/register
}

export async function register(
    username: string,
    email: string,
    password: string
): Promise<Response> {
    return fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, email: email, password: password })
    }).then(async (response) => response);
}

export function logout(username: string, email: string, password: string): void {
    // localhost:8080/user/register
}
