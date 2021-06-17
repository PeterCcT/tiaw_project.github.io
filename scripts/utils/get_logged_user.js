export function getLoggedUser() {
    const user = sessionStorage.getItem('currentUse')
    return JSON.parse(user)
}
