import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { links, subLinks, socials } from '../data';
import navLogo from '../assets/images/atlogo.png';
import painlessLogo from '../assets/images/pcalogo2.png';

export default function MainLayout( {handleRoleSet} ) {

    const [isActive, setIsActive] = useState(true);
    const [switchButton, setSwitchButton] = useState(true);
    // const [currentRole, setCurrentRole] = useState('');

    function handleSelect() {
        setIsActive(is => !is);
    }

    function handleSwitchButton() {
        setSwitchButton(sb => !sb);
    }

    // function handleRoleSet(userRole) {
    //     setCurrentRole(userRole);
    // }

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
                                {
                                    id === 5 ? <span>{name}</span> :

                                    (path.startsWith('http') ?
                                        <a href={path} target="_blank" rel="noopener noreferrer">{name}</a> :
                                        <NavLink to={path} className={({ isActive }) => isActive ? 'active-link' : ''}>{name}</NavLink>)
                                }
                                    {id === 5 && 
                                        <ul className={`sub-nav__links ${ !isActive ? "active_sub-nav" : ''}`}>
                                            {subLinks.map(({id, path, name}) => (
                                                <li key={id}>
                                                    <NavLink to={path} className={({ isActive }) => isActive ? 'sub-active-link' : ''} onClick={() => handleRoleSet(name)}>
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                            </li>
                        ))}
                    </ul>

                    {/* Sidebar for small screen */}
                    <div className={`small__nav ${ !switchButton ? "active-small__nav" : ''}`}>
                        <ul className='main-small__nav'>
                            {links.map(({id, path, name, Icon, subLinks}) => (
                                <li key={id}>
                                    {
                                        id === 5 ? 
                                        <span>
                                            <i><Icon /></i>
                                            {name}
                                        </span> :

                                        (path.startsWith('http') ?
                                            <a href={path} target="_blank" rel="noopener noreferrer">
                                                <i><Icon /></i>
                                                {name}
                                            </a> :
                                            <NavLink to={path} className={({ isActive }) => isActive ? 'small-active-link' : ''} >
                                                <i><Icon /></i>
                                                {name}
                                            </NavLink>)
                                    } 

                                    {(id === 5) && 
                                        <ul className={`sm-sub-nav__links ${ !isActive ? "active_sub-nav" : ''}`}>
                                            {subLinks.map(({id, path, name}) => (
                                                <li key={id} onClick={handleSwitchButton}>
                                                    <NavLink to={path} className={({ isActive }) => isActive ? 'sub-active-link' : ''} onClick={() => handleRoleSet(name)}>
                                                        {name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className='navButton' onClick={handleSwitchButton}>
                    {switchButton ? <RxHamburgerMenu /> : <MdClose />}
                </button>
            </nav>
            <div className={`overlay ${!switchButton ? 'active-overlay' : ''}`} onClick={handleSwitchButton}></div>

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
                                        {
                                            (id === 5) ? <span>{name}</span> :

                                            (path.startsWith('http') ?
                                                <a href={path} target="_blank" rel="noopener noreferrer">{name}</a> :
                                                <NavLink to={path} className={({ isActive }) => isActive ? 'footer__active-link' : ''}>{name}</NavLink>)
                                        }                                    
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="footer__location">
                        <div className="footer__address">
                            <h4>Location</h4>
                            <p>Oyeyinka Village, Ajia Road, Off New Ibadan/Ife Express Road, Ona-Ara Ibadan</p>
                        </div>

                        <div className="footer__map"> 
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6655.078575453666!2d4.02124744046385!3d7.33891296171727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039942aef03ee3d%3A0x1679896d892e422d!2sAjia%20201103%2C%20Oyo!5e0!3m2!1sen!2sng!4v1766696694408!5m2!1sen!2sng"
                                width="600"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="At-tanzeel Schools Ibadan"
                            ></iframe>
                        </div>
                    </div>

                    <div className="footer__contacts">
                        <h4>Contacts</h4>

                        <div className="footer__socials">
                            {socials.map((item) => (
                                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"><i><item.icon /></i></a>
                            ))}
                        </div>

                        <div className="footer__numbers">
                            <p>+2347063920769</p>
                            <p>+2348120168494</p>
                        </div>
                    </div>
                </div>

                <div className="sub__footer">
                    <p>&copy; {new Date().getFullYear()} At-Tanzeel Islamic Center.</p>
                    <div className="painless-logo">
                        <a href="https://painless-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <small>Powered by:</small> 
                            <img src={painlessLogo} alt="Painless Logo" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}