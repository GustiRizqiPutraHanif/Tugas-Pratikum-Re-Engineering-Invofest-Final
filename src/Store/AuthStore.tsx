import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (username: string) => {
                console.log("🔐 Store: Logging in user:", username);
                set({ isAuthenticated: true, user: username });
            },
            logout: () => {
                console.log("🔐 Store: Logging out");
                set({ isAuthenticated: false, user: null });
            },
        }),
        {
            name: 'auth-storage',
            version: 1,
        }
    )
);