import React from 'react';

function ArticleCard({article}){
  const newDate = new Date(article.publishedDate);
  const dateString = newDate.toDateString();

  return (
    <div className="ArticleCardWrapper">
      <div className="AricleCardImage">
        <img src={article.image.url} alt={article.image.alt}></img>
      </div>
      <div className="ArcileCardText">
        <h2 className="ArcileCardTitle">{article.title}</h2>
          <p className="ArcileCardDate">{dateString}</p>
          <p className="ArcileCardBlub">{article.blurb}</p>
          <p className="ArcileCardLink">
            <a href={`/article/${article.id}`}>Read More</a>
          </p>
      </div>
    </div>
    );
}

export default ArticleCard;