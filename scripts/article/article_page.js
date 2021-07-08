import { isAlreadyAnFavoriteArticle, favoriteArticle } from './favorite_article.js'
import { getArticleById } from './article.js'

const { href } = window.location
const articleId = href.split('=')[1]

const unfavoritieToggle = document.getElementById('unfavorite_action')
const favoritieToggle = document.getElementById('favoritie_action')
function fullFillPageWithArticleContent() {
    const article = getArticleById( articleId );
    if (article) {
        const {title, content} = article
        document.getElementById('articleTitle').innerHTML = title;
        document.getElementById('articleContent').innerHTML = content;
    }
    else
    {
        alert("Esse artigo não existe");
        window.location.href="../index.html"
        //window.location.href="../articles/article.html"
    }
}

window.onload = () => {
    fullFillPageWithArticleContent()
    const isFavoriteArticle = isAlreadyAnFavoriteArticle(articleId)

    if (isFavoriteArticle) {
        unfavoritieToggle.style.display = 'block'

    } else {
        favoritieToggle.style.display = 'block'
    }
}

favoritieToggle.addEventListener('click', () => {
    favoriteArticle(articleId)
    favoritieToggle.style.display = 'none'
    unfavoritieToggle.style.display = 'block'
})

unfavoritieToggle.addEventListener('click', () => {
    favoriteArticle(articleId)
    unfavoritieToggle.style.display = 'none'
    favoritieToggle.style.display = 'block'
})