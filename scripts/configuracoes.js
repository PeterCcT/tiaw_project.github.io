import { getLoggedUser } from './utils/get_logged_user.js'
import { getAllUserFavoritesArticles } from './article/favorite_article.js'

window.onload = () => {

    const user = getLoggedUser();

    if (user) {
        const { name, about } = user;

        const nameElement = document.getElementById('nome');
        nameElement.innerHTML = name;

        const aboutElement = document.getElementById('about')
        aboutElement.innerHTML = about

        getAllUserFavoritesArticles(user)
    } else {
        window.location.href = './login.html'
    }
}