import { createContext } from 'react';

type UserType = {
    id?: number;
    username?: string;
    email?: string;
    token?: string;
};

export const UserContext = createContext<{
    user: UserType | null;
    setUser: ((user: UserType) => void) | null;
} | null>(null);
