import { db } from '../scripts_db/index.js'

function disable_registerButton() {
    btn_publicar.setAttribute('disabled', true);
}

function enable_registerButton() {
    btn_publicar.removeAttribute('disabled');
}

function inserirArtigo() {
    
    const id_article = db.articles.length + 1;
    const author_article = document.getElementById('author_article').value;
    const data_article = document.getElementById('data_article').value;
    const title_article = document.getElementById('title_article').value;
    const category_article = document.getElementById('category_article').value;
    const content_article = document.getElementById('content_article').value;

    let article = {
        id: id_article,
        author: author_article,
        data: data_article,
        title: title_article,
        category: category_article,
        content: content_article
    }

    db.articles.push(article);
    localStorage.setItem('dbArticles', JSON.stringify(db.articles));

    disable_registerButton();

    document.getElementById('author_article').value = '';
    document.getElementById('data_article').value = '';
    document.getElementById('title_article').value = '';
    document.getElementById('category_article').value = '';
    document.getElementById('content_article').value = '';
}

function checkData() {
    const author_article = document.getElementById('author_article').value;
    const data_article = document.getElementById('data_article').value;
    const title_article = document.getElementById('title_article').value;
    const category_article = document.getElementById('category_article').value;
    const content_article = document.getElementById('content_article').value;

    if(!(author_article == '') && !(data_article == '') && !(title_article == '') && !(category_article == '') && !(content_article == '')) {
        return true;
    }
    else {
        return false;
    }
}


disable_registerButton();

localStorage.setItem('dbArticles', JSON.stringify(db));

author_article.oninput = () => {
    if(checkData())     enable_registerButton();
}

data_article.oninput = () => {
    if(checkData())     enable_registerButton();
}

title_article.oninput = () => {
    if(checkData())     enable_registerButton();
}

category_article.oninput = () => {
    if(checkData())     enable_registerButton();
}

content_article.oninput = () => {
    if(checkData())     enable_registerButton();
}

document.getElementById('btn_publicar').addEventListener('click', inserirArtigo);
