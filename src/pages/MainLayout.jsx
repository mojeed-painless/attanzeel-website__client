import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { links, subLinks, socials } from '../data';
import navLogo from '../assets/images/atlogo.png';
import mapImage from '../assets/images/map.jpg';
import pcaLogo from '../assets/images/pcalogo2.png';

export default function MainLayout() {

    const [isActive, setIsActive] = useState(true);
    const [switchButton, setSwitchButton] = useState(true);

    function handleSelect() {
        setIsActive(is => !is);
    }

    function handleSwitchButton() {
        setSwitchButton(sb => !sb);
    }

    return (
        <div>
            <nav className='nav__container'>
                <div className="nav__logo">
                    <img src={navLogo} alt="School logo"/>
                </div>

                <div className="nav__links">
                    <ul className='main-nav__links'>
                        {links.map(({id, path, name, subLinks}) => (
                            <li key={id}>
                                <Link to={path} onClick={(id === 4) ? handleSelect : ''}>{name}</Link>
                                    {id === 4 && 
                                        <ul className={`sub-nav__links ${ !isActive ? "active_sub-nav" : ''}`}>
                                            {subLinks.map(({id, path, name}) => (
                                                <li key={id}>
                                                    <Link to={path}>
                                                        <i className='link__icon'><PiStudent /></i>
                                                        {name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                            </li>
                        ))}
                    </ul>

                    {/* Sidebar for small screen */}
                    <div className={`small__nav ${ !switchButton ? "active_small__nav" : ''}`}>
                        <ul className='main-small__nav'>
                            {links.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.path} onClick={(item.id === 4) ? handleSelect : ''}>
                                        <i><item.icon /></i>
                                        {item.name}
                                    </Link>   
                                </li>
                            ))}
                        </ul>
                        <ul className={`sub-small__nav ${ !isActive ? "active-small__nav" : ''}`}>
                            {subLinks.map(({id, path, name}) => (
                                <li key={id}>
                                    <Link to={path}>
                                        <i className='small__nav-icon'><PiStudent /></i>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className='navButton' onClick={handleSwitchButton}>
                    {switchButton ? <RxHamburgerMenu /> : <MdClose />}
                </button>
            </nav>

            <section className="body__container">
                <Outlet />
            </section>

            <footer>
                <div className="main__footer">
                    <div className="footer__links">
                        <h4>Permalinks</h4>

                        <div className="footer__nav">
                            <ul className='main-footer__nav'>
                                {links.map(({ id, path, name }) => (
                                    <li key={id}>
                                        <Link to={path} onClick={(id === 4) ? handleSelect : ''}>{name}</Link>   
                                    </li>
                                ))}
                            </ul>

                            {/* <ul className={`sub-footer__nav ${ !isActive ? "active_footer__nav" : ''}`}>
                                {sublinks.map(({id, path, name}) => (
                                    <li key={id}>
                                        <Link to={path}>
                                            <i className='footer__nav-icon'><PiStudent /></i>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>

                    <div className="footer__location">
                        <div className="footer__address">
                            <h4>Location</h4>
                            <p>Oyeyinka Village, Ajia Road, Off New Ibadan/Ife Express Road, Ibadan</p>
                        </div>

                        <div className="footer__map"> 
                            <img src={mapImage} alt="map image"/> 
                        </div>
                    </div>

                    <div className="footer__contacts">
                        <h4>Contacts</h4>

                        <div className="footer__socials">
                            {socials.map((item) => (
                                <Link key={item.id} to={item.link}><i><item.icon /></i></Link>
                            ))}
                        </div>

                        <div className="footer__numbers">
                            <p>+2347063920769</p>
                            <p>+2348120168494</p>
                        </div>
                    </div>
                </div>

                <div className="sub__footer">
                    <p>&copy; {new Date().getFullYear()} Copyright At-Tanzeel Islamic Center. All right reserved</p>
                    <img src={pcaLogo} alt="pca logo" />
                </div>
            </footer>
        </div>
    )
}