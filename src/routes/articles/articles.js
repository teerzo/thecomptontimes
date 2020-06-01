
import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import Articles from 'components/articles';
import Image from 'components/image';
import Sticky from 'components/sticky';

import imgAdSuross from 'images/ad-suross.png';

export default function RouteArticles() {


    const routeClasses = cx(
        'route',
        'route-articles',
    )

    return (
        <div className={routeClasses}>
            <div className="ad">
                <Sticky>
                    <Image src={imgAdSuross} />
                </Sticky>

            </div>
            <Articles />
            <div className="ad"> RIGHT AD </div>
        </div>
    )
}