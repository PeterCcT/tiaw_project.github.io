import { getArticles } from "../utils/get_articles.js";
export function getArticleById ( id ) {
    const articles = getArticles();
    return articles.find(article => article.id === id)
}