import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../assets/styles/header-info.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { headerInfo } from '../data';



export default function HeaderInformation() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % headerInfo.length);
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {headerInfo.map(({id, className, title, content, buttonText, link}, index) => (
                <div key={id} className={`header__container ${className} ${index === currentIndex ? 'active' : 'inactive'}`}>
                    <div className="header__left">
                        <h4>{title}</h4>
                        <p>{content}</p>
                        <button type="button">
                            <Link to={link}>
                                {buttonText} 
                                <span><FaArrowRightLong /></span>
                            </Link>
                        </button>
                    </div>

                    <div className="header__right">
                        {/* <img src={headerImage1} alt="" /> */}
                    </div>
                </div>
            ))}
        </>
    )
}