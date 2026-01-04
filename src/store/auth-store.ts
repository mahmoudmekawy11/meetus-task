import { clearLocalStorage, getTokenFromLocalStorage, setTokenToLocalStorage } from '../utils/index';
import { create } from "zustand";
import { AppAxios } from '@/lib/axios.config';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    user: {
        id?: string;
        name?: string;
        email?: string;
    } | null;
    setToken: (token: string | null) => void;
    setUser: (user: AuthState["user"]) => void;
    clearToken: () => void;
}

// Initialize token from localStorage
const storedToken = getTokenFromLocalStorage();

// Set up axios with the stored token immediately
if (storedToken) {
    AppAxios.setup(storedToken);
}

export const useAuthStore = create<AuthState>((set) => ({
    token: storedToken,
    isAuthenticated: !!storedToken,
    user: null,
    setToken: (token) => {
        if (token) {
            setTokenToLocalStorage(token);
            AppAxios.setup(token);
        } else {
            clearLocalStorage();
            AppAxios.setup(null);
        }
        set({
            token,
            isAuthenticated: !!token,
        });
    },
    setUser: (user) => set({ user }),
    clearToken: () => {
        clearLocalStorage();
        AppAxios.setup(null);
        set({
            token: null,
            isAuthenticated: false,
            user: null,
        });
    },
}));
