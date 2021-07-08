import { getLoggedUser } from '../utils/get_logged_user.js'
import { updateUserDb, updateLoggedUser } from '../utils/update_db.js'
import { getArticleById } from './article.js'

export function getAllUserFavoritesArticles(user) {
    if (user) {
        const { favoritiesArticles } = user
        if (favoritiesArticles) {
            const articleMainContainer = document.getElementById('articleMainContainer')

            for (const favoriteArticleId of favoritiesArticles) {
                const { title } = getArticleById(favoriteArticleId)
                const articleElement = createFavoriteArticleElement(favoriteArticleId, title)

                articleMainContainer.appendChild(articleElement)
            }
        }
    }
}

function createFavoriteArticleElement(articleId, articleTitle) {
    const mainElement = document.createElement('li')
    const articleLink = document.createElement('a')

    mainElement.className = 'categorie_card'
    articleLink.href = `./articles/article.html?id${articleId}`
    articleLink.text = articleTitle

    mainElement.appendChild(articleLink)

    return mainElement

}

export function favoriteArticle(id) {
    const user = getLoggedUser()

    if (user) {
        const { email, favoritiesArticles } = user
        const isAlreadyAnFavoriteArticle = favoritiesArticles.includes(id)
        if (isAlreadyAnFavoriteArticle) {
            const itemIndex = favoritiesArticles.findIndex(article => article === id)
            favoritiesArticles.splice(itemIndex, 1)
        } else {
            favoritiesArticles.push(id)
        }

        updateUserDb(email, { 'favoritiesArticles': favoritiesArticles })
        updateLoggedUser({ 'favoritiesArticles': favoritiesArticles })
    }
}

export function isAlreadyAnFavoriteArticle(id) {
    const { favoritiesArticles } = getLoggedUser()
    return favoritiesArticles.includes(id)
}