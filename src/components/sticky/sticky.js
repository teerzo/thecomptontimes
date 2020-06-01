import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import './sticky.scss';

export default function Header(props) {

    const [sticky, setSticky] = useState(false);

    const ref = useRef(null);

    const handleScroll = () => {
        if (ref.current) {
            console.log('onScroll', ref.current, ref.current.getBoundingClientRect().top);

            let check = 10; // top.current.getBoundingClientRect().height + weather.current.getBoundingClientRect().height;

            if (ref.current.getBoundingClientRect().top < -(check)) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }

        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const cmpClasses = cx(
        'sticky',
    )

    const stickyClasses = cx(
        'sticky-inner',
        { 'active': sticky }
    )

    return (
        <div ref={ref} className={cmpClasses}>
            <div className={stickyClasses}>
                {props.children}
            </div>
        </div>
    )
}