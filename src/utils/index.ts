export const getTokenFromLocalStorage = (): string | null => {
    return localStorage.getItem("meetUsToken");
}


export const clearLocalStorage = (): void => {
    localStorage.removeItem("meetUsToken");
}


export const setTokenToLocalStorage = (token: string): void => {
    localStorage.setItem("meetUsToken", token);
}