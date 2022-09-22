const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articleId = urlParams.get('id');
   /* const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await response.json();
    return articles;*/
let url = 'https://jsonplaceholder.typicode.com/posts';
async function getArticles() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderArticle() {
    let articles = await getArticles();
    console.log(articles);
    let article = articles.find(o => o.id == articleId);
    console.log(article);
    document.getElementById("title").innerHTML = article.title;
    document.getElementById("body").innerHTML = article.body;
}
renderArticle();
