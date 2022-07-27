export const verifyLocalStorage = () => {
    const localS = JSON.parse(localStorage.getItem('auth'));
    if (localS === null) {
        localStorage.setItem('auth', false);
        return false
    } else if (localS === false) {
        return false
    }
    else {
        return true
    }
}

export const loginLocalStorage = () => {
    localStorage.setItem('auth', true);
}

export const logoutLocalStorage = () => {
    localStorage.setItem('auth', false);
}