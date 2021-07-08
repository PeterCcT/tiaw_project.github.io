import { getLoggedUser } from '../utils/get_logged_user.js'
import { updateUserDb, updateLoggedUser } from '../utils/update_db.js'

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
    const  user  = getLoggedUser()
    if (user)
    {
        const { favoritiesArticles } = user
        return favoritiesArticles.includes(id)
    }
    return false
}