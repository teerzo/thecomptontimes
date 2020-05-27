
import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import { FaGlobe, FaCalendar, FaTemperatureHigh } from "react-icons/fa";

import './articles.scss';

import jsonArticles from '../data/articles.json';

export default function Articles(props) {

    const [articles, setArticles] = useState();


    useEffect(() => {
        console.log('Articles', jsonArticles);
        if (jsonArticles) {
            setArticles(jsonArticles);
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

    const cmpClasses = cx(
        'article',
    )
    return (
        <div className={cmpClasses}>
            Article: #{props.index}
        </div>
    )
}
