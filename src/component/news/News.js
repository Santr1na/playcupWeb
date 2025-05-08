import React from "react";
import './News.css';
import polygon from '../../icons/Polygon.svg';
import img_news from '../../img/img-news.png';

function News(){
    return(
        <div class="news">
            <div class="image-new">
                <img src={img_news} alt="" className='image-news'/>
            </div>
        
            <div class="news-text">
                <h4 class="head-news">Рады объявить о новом сотрудничестве</h4>
                <p class="description">Сегодня мы рады вам сообщить, что наш сайт принял новое партнёрское соглашение.</p>

                <a href="#">
                    <div class="learn-more">
                        <p>Узнать больше</p>
                        <img src={polygon} alt="" id="pol"/>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default News;