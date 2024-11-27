const { data } = require("browserslist");

const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  fetchNews();
  
  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
    // for (const i = 0; i < data.length; i++) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-title');

        //create and append a headline to the articleDiv
        const title = document.createElement('h2');
        title.classList.add('news-title');
        title.textContent = article.title;

        const articleDesc = document.createElement('p');
        articleDesc.classList.add('news-desc');
        articleDesc.textContent = article.description;

        const articleImg = document.createElement('img');
        articleImg.classList.add('article-image');
        articleImg.src = article.urlToImage;

        const articleUrl = document.createElement('a');
        articleUrl.classList.add('article-link');
        articleUrl.href = article.url;
        articleUrl.textContent = 'Continue reading';


        articleDiv.appendChild(title);
        articleDiv.appendChild(articleDesc);
        articleDiv.appendChild(articleImg);
        articleDiv.appendChild(articleUrl);

  
      newsDiv.appendChild(articleDiv);
    }
}