
import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import { FaGlobe, FaCalendar, FaTemperatureHigh } from "react-icons/fa";

import './articles.scss';

import imgTemp from 'images/temp.png';

import jsonArticles from 'json/articles.json';

export default function Articles(props) {
    const [articles, setArticles] = useState();


    useEffect(() => {
        console.log('Articles', jsonArticles);
        if (jsonArticles) {
            let arr = [];
            arr = arr.concat(jsonArticles);
            arr = arr.concat(jsonArticles);
            arr = arr.concat(jsonArticles);
            arr = arr.concat(jsonArticles);
            arr = arr.concat(jsonArticles);
            setArticles(arr);
        }
    }, [])

    const cmpClasses = cx(
        'articles',
    )

    return (
        <div className={cmpClasses}>
            {articles && articles.length > 0 ?
                <div className="grid">
                    {articles.map((item, key) => {
                        return (
                            <Article key={key} index={key} data={item} />

                        )
                    })}
                </div>
                :
                <div className="blank">
                    No articles available
                </div>
            }

        </div>
    )
}

function Article(props) {

    function getArticleDate(date) {
        const t1 = new Date(date).getTime();
        const t2 = Date.now();

        const result = parseInt((t2 - t1) / (24 * 3600 * 1000));
        if (result > 1) {
            return `${result} days ago`;
        }
        else {
            return `${result} day ago`;
        }
    }

    const cmpClasses = cx(
        'article',
    )
    return (
        <div className={cmpClasses}>
            <div className="updated">
                <span className="category"> {props.data.category} </span>
                <span className="date"> {getArticleDate(props.data.date)} </span>
            </div>
            {props.index === 0 ?
                <div className="article-large">

                    <div className="article-image">
                        <img src={imgTemp} />
                    </div>
                    <h3 className="article-title">{props.data.title}  </h3>
                    <div className="desc">
                        <p> {props.data.description} </p>

                    </div>
                </div>
                :
                <div className="article-small">
                    <h4 className="article-title">{props.data.title}  </h4>
                    <div className="inner">
                        <div className="article-image">
                            <img src={imgTemp} />
                        </div>
                        <div className="desc">
                            <p> {props.data.description} </p>
                        </div>
                    </div>
                </div>


            }

        </div>
    )
}
