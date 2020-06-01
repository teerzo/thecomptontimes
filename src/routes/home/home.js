
import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import Articles from 'components/articles';

export default function RouteHome() {


    const routeClasses = cx(
        'route',
        'route-home',
    )

    return (
        <div className={routeClasses}>
            <div className="ad"> LEFT AD </div>
            <Articles />
            <div className="ad"> RIGHT AD </div>
        </div>
    )
}