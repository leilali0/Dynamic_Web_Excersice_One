import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Data from '../components/data.json';

function Article() {
	const [article, setArticle] = useState({});

	let { id } = useParams();

	useEffect(() => {
		const dataToSet = Data.find((item) => item.id === id);
		setArticle(dataToSet);
	}, [id]); //the function will run whenever the id changes 

return (
		<main>
			<section className="ArticleHeader">
				<div className="ArticleHeaderText">
					<h1 className="HeaderOneStyle">{article.title}</h1>
					<p className="ArticleHeaderDate">{article.publishedDate}</p>
					<p className="ArticleHeaderBlurb">{article.blurb}</p>
				</div>
			</section>
			<section className="ArticleText">
				{article.articleText && 
					article.articleText.map((text, i) => {
						return <p key={i}>{text.data}</p>;
				})}
			</section>
		</main>
	);
}

export default Article;