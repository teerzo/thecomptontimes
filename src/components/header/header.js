
import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import { FaGlobe, FaCalendar, FaTemperatureHigh } from "react-icons/fa";

import './header.scss';

import imgCompton from '../../images/compton.png';
import imgHood from '../../images/hood.png';


export default function Header(props) {

    const [sticky, setSticky] = useState(false);

    const ref = useRef(null);
    const top = useRef(null);
    const weather = useRef(null);

    const handleScroll = () => {
        if (ref.current) {
            console.log('onScroll', ref.current, ref.current.getBoundingClientRect().top);

            if (top.current && weather.current) {
                let check = top.current.getBoundingClientRect().height + weather.current.getBoundingClientRect().height;

                console.log(top.current.getBoundingClientRect());
                if (ref.current.getBoundingClientRect().top < -(check)) {
                    setSticky(true);
                }
                else {
                    setSticky(false);
                }
            }
            else {

            }


        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    function getTempRand() {
        const min = 40;
        const max = 60;
        return (Math.random() * (max - min) + min).toFixed(1);
    }


    const cmpClasses = cx(
        'header',
        // { 'sticky': sticky }
    )

    const cmpStyles = {
        backgroundImage: `url(${imgCompton})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }


    const stickyClasses = cx(
        'sticky-inner',
        { 'active': sticky }
    )

    return (
        <header ref={ref} className={cmpClasses} style={cmpStyles}>
            <div ref={weather} className="weather">
            <img src={imgHood} className="logo" />

                <div className="group">
                    <FaCalendar className="icon" />
                    <span> 0 BBY </span>
                </div>
                <div className="group">
                    <FaGlobe className="icon" />
                    <span> Tatooine </span>
                </div>

                <div className="group">
                    <FaTemperatureHigh className="icon" />
                    <div> {getTempRand()}&deg;C </div>
                </div>


            </div>
            <div ref={top} className="header-top">

                <div className="full-width">

                    <h1 className="title"> The Compton Times </h1>
                    <p> Proudly sponsored by HOOD </p>
                </div>
            </div>
            <div className={stickyClasses}>
                <div className="">

                </div>
                <div className="links">
                    <a href="/cantina"> Cantina </a>
                    <a href="/drama"> Drama </a>
                    <a href="/pvp"> PVP </a>
                    <a href="/opinion"> Opinion  </a>
                    <a href="/roleplay"> RP </a>
                </div>
            </div>
        </header >
    )
}
