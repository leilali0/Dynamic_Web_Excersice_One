import React from 'react';

function ArticleCard({article}){
  console.log(article);

  return (
    <div className="ArticleCardWrapper">
      <div className="AricleCardImage">
        <img src={article.image.url} alt={article.image.alt}></img>
      </div>
      <div className="ArcileCardText">
        <h2 className="ArcileCardTitle">{article.title}</h2>
          <p className="ArcileCardDate">{article.publishedDate}</p>
          <p className="ArcileCardBlub">{article.blurb}</p>
          <p className="ArcileCardLink">
            <a href="#">Read More</a>
          </p>
      </div>
    </div>
    );
}

export default ArticleCard;