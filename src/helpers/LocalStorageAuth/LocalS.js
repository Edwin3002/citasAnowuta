export const verifyLocalStorage = () => {
    const localS = JSON.parse(localStorage.getItem('auth'));
    if (localS === null) {
        return false
    } else {
        return true
    }
}

export const loginLocalStorage = () => {
    localStorage.setItem('auth', true);
}

export const logoutLocalStorage = () => {
    localStorage.removeItem('auth');
}