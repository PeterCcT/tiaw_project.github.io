import { getLoggedUser } from '../scripts/utils/get_logged_user.js'

window.onload = () => {
    const user = getLoggedUser()

    if (user) {
        setLoginAndLoggedStateToDisplay('none', 'block')
    } else {
        setLoginAndLoggedStateToDisplay('block', 'none')
    }
}

function setLoginAndLoggedStateToDisplay(loginDisplay, loggedDisplay) {
    const loginElements = document.querySelectorAll('.loginElement')
    const loggedElements = document.querySelectorAll('.loggedElement')


    for (const loginElement of loginElements) {
        loginElement.style.display = loginDisplay

    }

    for (const loggedElement of loggedElements) {
        loggedElement.style.display = loggedDisplay
    }
}
