import React , {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import vk from '../../icons/VK-footer.svg';
import tg from '../../icons/TG-footer.svg';
import steam from '../../icons/Steam-footer.svg';

import logo_footer from '../../icons/Logo_footer.svg';
import logo_mobile from './logo-mobile-footer.svg';

import glow_down from '../../img/glows_down.png';

const Footer = () => {
    return(
        <div className='glow-footer'>
            <div class="glow-down">
                <img src={glow_down} alt=""/>
            </div> 

            <footer>
                <div class="footer-up">
                    <div class="footer-up-up">
                        <picture>
                            <source srcset={logo_mobile} media="(max-width: 768px)" style={{width: '32px'}} />
                            <img src={logo_footer} alt="Логотип" className="Logo" />
                        </picture>
                        <div class="act-gamers">
                            <div class="now-play">
                                <p class="quantity">0<p class="player">играют</p></p>
                            </div>
                            <a href="#" id="white-link">Активные турниры</a>
                            <a href="#" id="white-link">Система призов</a>
                            <a href="#" id="white-link">История</a>  
                        </div>
                        <div class="help">
                            <div class="quantity-online">
                                <p class="quantity2">0<p class="online">онлайн</p></p>
                            </div>
                            <a href="#" id="white-link">Вопросы</a>
                            <a href="#" id="white-link">Поддержка</a>
                            <a href="#" id="white-link">Отзывы</a>
                        </div>
                    </div>
                    <div class="footer-social-media">
                        <a href='#'><img src={vk} alt="" class="VK" id="social-media"/></a>
                        <a href='#'><img src={steam} alt="" class="Steam-img" id="social-media"/></a>
                        <a href='#'><img src={tg} alt="" class="Telegram" id="social-media"/></a>
                    </div>
                    
                </div>
                <div class="footer-down">
                    <div class="footer-down-left">
                        <Link to={'/about'} id="gray-link"><p>О нас</p></Link>
                        <a href="#" id="gray-link"><p>Условия</p></a>
                        <div class="language">
                            <p>Русский</p>
                        </div>
                    </div>
                    <div class="company-year">
                        <p>©playcup — All Rights Reserved</p>
                        <p>2025</p>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;