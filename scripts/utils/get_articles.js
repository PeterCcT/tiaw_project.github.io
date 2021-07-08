export function getArticles () {
    return JSON.parse(localStorage.getItem("articles"))
}