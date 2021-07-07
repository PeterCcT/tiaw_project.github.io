import { getLoggedUser } from './utils/get_logged_user.js'

window.onload = () => {

    const user = getLoggedUser();

    if (user) {
        const { name, email } = user;
        const nameElement = document.getElementById('noome');
        const emailElement = document.getElementById('email');
        nameElement.innerHTML = name;
        emailElement.innerHTML = email;
    } else {
        window.location.href = './login.html'
    }
    botaoSobre.onclick = () => {

    }
}