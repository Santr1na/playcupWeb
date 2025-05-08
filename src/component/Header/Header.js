import React , {useState, useEffect, useRef} from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

import './Header.css';
import logo from './logo.svg';
import logo_mobile from './logo-mobile.svg'
import menu from './menu.svg';
import more from './more.svg';
import steam from '../../icons/Steam.svg';
import { Link } from 'react-router-dom';

let id = 0;

const notifications = [
    {
        id: ++id,
        headers: 'Уведомление 1',
        moreInfoNotification: 'больше информации о уведомлениибольше информации о уведомлении',
        dateOfReceipt: '12.12.2023'
    },

    {
        id: ++id,
        headers: 'Уведомление 2',
        moreInfoNotification: 'больше информации о уведомлении больше информации о уведомлении',
        dateOfReceipt: '12.12.2023'
    },

    {
        id: ++id,
        headers: 'Уведомление 3',
        moreInfoNotification: 'больше информации о уведомлении больше информации о уведомлении',
        dateOfReceipt: '12.12.2023'
    }
]

function Header() {
    const [isOpen, OpenBell] = useState(false);
    const [isOpen2, OpenChat] = useState(false);
    const bellRef = useRef(null); 
    useClickOutside(bellRef, () => {
        if(isOpen) setTimeout(() => OpenBell(false), 50)
    });

    const chatRef = useRef(null);
    useClickOutside(chatRef, () => {
        if (isOpen2) setTimeout(() => OpenChat(false, 50))
    });

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    useClickOutside(node, () => setOpen(false));

    return (
        <>
            <header>
            <div className='logo-and-navigate'>
                <div className='navigate'>
                    <Link to='/' style={{width: 'max-content'}}>
                        <picture>
                            <source srcset={logo_mobile} media="(max-width: 768px)" style={{width: '32px'}} />
                            <img src={logo} alt="Логотип" className="logo" />
                        </picture>
                    </Link>
                    <nav className='text'>
                        <ul className='navigate-menu'>
                            <Link to='/'><li>Главная</li></Link>
                            <Link to='/tournaments'><li>Турниры</li></Link>
                            <Link to='/help'><li>Помощь</li></Link>
                        </ul>
                    </nav>
                </div>

                <div className='navigate-and-profile-menu'>
                    <div className='bell-and-chat'>
                        <nav>
                            <ul className='bell-chat'>
                                <li>
                                    <svg onClick={() => OpenBell(!isOpen)} className='bell-icon' width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="bell">
                                        <g id="Rectangle 4" filter="url(#filter0_d_6_24)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C16.3137 3 19 5.68624 19 8.99995C19 10.9131 19 12.8341 19 14C19 17 21 18 21 18L5 18C5 18 7 17 7 14C7 12.8341 7 10.9131 7 8.99995C7 5.68624 9.68629 3 13 3Z" stroke="#464663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <path id="Oval" d="M11 18C11 19.1046 11.8954 20 13 20C14.1046 20 15 19.1046 15 18" stroke="#464663" stroke-width="2" stroke-linecap="round"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_6_24" x="0" y="2" width="26" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_24"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_24" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>

                                    <div className={`full-bell-info ${isOpen ? 'active' : ''}`} ref={bellRef}>
                                        <div className="notification">
                                                {
                                                    notifications.map((notification) => {
                                                        return(
                                                            <div className="padding-mini-notification">
                                                                <p className='Header-notification'>{notification.headers}</p>
                                                                <p className="description-notification">{notification.moreInfoNotification}</p>

                                                                <div className="more-info-notification">
                                                                    <button className="more-first-notification">
                                                                        Подробнее
                                                                    </button>
                                                                    <p className="date-notification">{notification.dateOfReceipt}</p>
                                                                </div>

                                                                <div className="line-notification">
                                                                    <hr color="#464663" size="0.5"/>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                                <div class="view-all-notifications">
                                                    <img src={more} alt=""/>
                                                    <p>Все уведомления</p>
                                                </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <svg onClick={() => OpenChat(!isOpen2)} className='chat-icon' width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="chat">
                                        <path id="Combined Shape" d="M8.82388 18.5881L9.08254 17.6221C8.84641 17.5589 8.59531 17.5843 8.37667 17.6936L8.82388 18.5881ZM4 21L3.01005 20.8586C2.95745 21.2268 3.11355 21.5938 3.41529 21.8112C3.71703 22.0287 4.11454 22.0608 4.44721 21.8944L4 21ZM4.65323 16.4274L5.64318 16.5688C5.69128 16.2321 5.56495 15.8941 5.30783 15.6714L4.65323 16.4274ZM12 20C17.8554 20 23 16.1673 23 11H21C21 14.6693 17.1903 18 12 18V20ZM8.56523 19.554C9.64796 19.8439 10.8029 20 12 20V18C10.9766 18 9.99553 17.8666 9.08254 17.6221L8.56523 19.554ZM4.44721 21.8944L9.2711 19.4825L8.37667 17.6936L3.55279 20.1056L4.44721 21.8944ZM3.66328 16.286L3.01005 20.8586L4.98995 21.1414L5.64318 16.5688L3.66328 16.286ZM1 11C1 13.4332 2.17171 15.6014 3.99863 17.1834L5.30783 15.6714C3.84087 14.4012 3 12.7562 3 11H1ZM12 2C6.14463 2 1 5.83274 1 11H3C3 7.33071 6.80967 4 12 4V2ZM23 11C23 5.83274 17.8554 2 12 2V4C17.1903 4 21 7.33071 21 11H23Z" fill="#464663"/>
                                        </g>
                                    </svg>

                                    <div className={`full-chat-info ${isOpen2 ? 'active' : ''}`} ref={chatRef}>
                                        <div className="chat">
                                            <p className='Dev-chat'>В разработке!</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='btn-profile'>
                        <button>
                            <img src={steam}/>
                            <h4>Войти через Steam</h4>
                        </button>
                    </div>

                    <div className='menu'>

                    </div>
                </div>
            </div>
            </header>

            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </>

    );
}

export default Header;