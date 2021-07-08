import { isAlreadyAnFavoriteArticle, favoriteArticle } from './favorite_article.js'
import { getArticleById } from './article.js'
import { getArticles } from '../utils/get_articles.js'

const { href } = window.location
const articleId = href.split('=')[1]

const unfavoritieToggle = document.getElementById('unfavorite_action')
const favoritieToggle = document.getElementById('favoritie_action')

function fullFillPageWithArticleContent(articleId) {

    const article = getArticleById(articleId);
    if (article) {
        const { title, content } = article
        const articleActions = document.getElementsByClassName('article_actions_container')[0]
        const noneArticleLabel = document.getElementsByClassName('none_article')[0]

        document.getElementById('articleTitle').innerHTML = title;
        document.getElementById('articleContent').innerHTML = content;
        articleActions.style.display = 'block'
        noneArticleLabel.style.display = 'none'

        togleOrNotFavoriteArticle()
    }
}

function togleOrNotFavoriteArticle() {
    const isFavoriteArticle = isAlreadyAnFavoriteArticle(articleId)

    if (isFavoriteArticle) {
        unfavoritieToggle.style.display = 'block'

    } else {
        favoritieToggle.style.display = 'block'
    }
}

function setAllArticlesToTopics() {

    const articles = getArticles()

    for (const article of articles) {
        const { id, title, category } = article

        const articleElement = createArticleElementToTopic(id, title)

        putArticleElementOnAnTopic(articleElement, category)
    }
}

function putArticleElementOnAnTopic(element, category) {

    if (category === 'accessibility') {
        const accessibilityTopic = document.getElementById('accessibilityArticles')

        accessibilityTopic.appendChild(element)

    } else if (category === 'tech') {
        const techTopic = document.getElementById('techArticles')

        techTopic.appendChild(element)
    } else {
        const topicInAccessibility = document.getElementById('topicInAccessibilityArticles')

        topicInAccessibility.appendChild(element)
    }

}


function createArticleElementToTopic(id, title) {
    const mainElement = document.createElement('li')

    mainElement.innerHTML = title

    mainElement.addEventListener('click', () => {
        fullFillPageWithArticleContent(id)
    })

    return mainElement
}

window.onload = () => {
    setAllArticlesToTopics()

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