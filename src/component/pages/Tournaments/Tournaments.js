import React , { useState } from "react";
import './Tournaments.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ActiveGame from '../../Menu/ActiveGame/ActiveGame';
import CardTournament from "../../cardsTournaments/cardTournaments";


function Tournaments(){
    const [value, setValue] = useState('');

    const [activeTour, setActiveTour] = useState('future'); // начальное значение 'future'

    // Функция для управления состоянием активного тура
    const handleTourClick = (tourType) => {
      setActiveTour(tourType);
    };
    return(
        <>
            <Header />

            <svg opacity={0.5} class="bg" width="1521" height="1096" viewBox="0 0 1521 1096" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M542 199L343.5 0.291748H583.5L922.708 339.292L542 199ZM1521 773L748.375 0.291748H988.5L1029.42 41L1521 773ZM1081.21 1096L-16 0.291748H225.5L435.5 209.876L1081.21 1096ZM1.5 743.5H0V503L270.208 771.792L1.5 743.5ZM150 561.896L0 413V172.792L722.812 894.292L150 561.896Z" fill="url(#paint0_linear_8_103)" fill-opacity="0.15"/>
              <defs>
                  <linearGradient id="paint0_linear_8_103" x1="1734" y1="1066" x2="-149.5" y2="-135" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0D111A"/>
                      <stop offset="1" stop-color="#1C2034"/>
                  </linearGradient>
              </defs>
            </svg>

            <main>
            <div className="center">
                <div className="up-tournaments-page">
                    <ActiveGame />

                    <button className="create-tournaments" translate="no">
                        <p>Создать турнир</p>
                    </button>
                        
                    <div className="back-search-tournaments">
                        <input className="search-tournaments" type="text" placeholder="Поиск" value={value} onChange={(e) => setValue(e.target.value)}/>
                    </div>
                </div>

                <div className="main-tournaments-page">
                <CardTournament />
                <div className="filters-tournaments-page">
                    <div className="up-filters-tournaments-page">
                        <div className={`future-tour ${activeTour === 'future' ? 'active' : ''}`}
                            onClick={() => handleTourClick('future')}>
                            Будущие
                        </div>
                        <div className="line-filters-tournaments-page"></div>
                        <div className={`now-tour ${activeTour === 'now' ? 'active' : ''}`}
                            onClick={() => handleTourClick('now')}>
                            Нынешние
                        </div>
                        <div className="line-filters-tournaments-page"></div>
                        <div className={`past-tour ${activeTour === 'past' ? 'active' : ''}`}
                            onClick={() => handleTourClick('past')}>
                            Прошедшие
                        </div>
                    </div>
                    <div className="down-filters-tournaments-page">
                        <span className="text-filter-tour">Фильтры</span>
                        <div className="filter-region">
                            <span>Регионы</span>
                            <svg id="pol" className="dropdown-arrow-filter-region" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.08826 0.330127C7.85806 0.330127 8.33919 1.16346 7.95429 1.83013L5.35621 6.33013C4.97131 6.99679 4.00906 6.99679 3.62416 6.33013L1.02608 1.83013C0.641184 1.16346 1.12231 0.330127 1.89211 0.330127L7.08826 0.330127Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="filter-format">
                            <span>Формат</span>
                            <svg id="pol" className="dropdown-arrow-filter-format" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.08826 0.330127C7.85806 0.330127 8.33919 1.16346 7.95429 1.83013L5.35621 6.33013C4.97131 6.99679 4.00906 6.99679 3.62416 6.33013L1.02608 1.83013C0.641184 1.16346 1.12231 0.330127 1.89211 0.330127L7.08826 0.330127Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="button-reset-tour">
                            <button className="reset-filter-tour">Сброс</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </main>

            <Footer />
        </>
    )
}

export default Tournaments;