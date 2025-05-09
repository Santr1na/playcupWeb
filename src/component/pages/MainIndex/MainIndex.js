import React, {useMemo, useState} from 'react';
import './MainIndex.css';
import Tour from '../../cardsTournaments/Tour/Tour.js';
import styled, { keyframes } from "styled-components";
import steam from '../../../icons/Steam.svg';
import gamepad from '../../../icons/gamepad.svg';
import CardTournaments from '../../cardsTournaments/cardTournaments';
import News from '../../news/News';
import Task from '../../task/Task';
import polygon from '../../../icons/Polygon.svg';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const GoPlayButton = styled.button`
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  position: relative;
  display: flex;
  width: 100%;
  height: 86px;
  background: linear-gradient(90deg, rgba(24,37,53,1) 0%, rgba(9,84,177,1) 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  z-index: 0;
  transition: transform 0.2s ease, opacity 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media(max-width: 1280px){
    height: 70px;
  }

  @media(max-width: 1100px){
    height: 60px;
  }

  @media(max-width: 960px){
    height: 50px;
  }

  @media(max-width: 768px){
    height: 40px;
    border-radius: 8px;
  }

  @media(max-width: 640px){
    height: 30px;
    border-radius: 6px;
  }

  @media(max-width: 480px){
    display: none;
  }
`;

const MainIndex = () => {
      const [activeTour, setActiveTour] = useState('future'); // 'future', 'now', 'past'
      const filteredTournaments = useMemo(() => {
        const now = new Date();
        return Tour.filter(tour => {
          const start = new Date(tour.dateStart);
    
          if (activeTour === 'future') {
              console.log(start > now);
              return start > now;
          }
          return true;
        });
      }, [activeTour]);
    return(
        <>
        <Header />
        <div class="up-glow"></div>
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
            <div className='center'>
                <section class="hello-window" id="hello-section">
                    <div class="hello-window-info-text">
                        <h2 class="lozung">Твой путь в киберспорт</h2>
                        <p class="about">Окунись в атмосферу игр: собирай команду, участвуй в соревнованиях, покоряй турниры, а также получай призы и возможность заработать.</p>
                        <div class="center-steam-enter">
                            <button class="enter-steam">
                                <img src={steam} alt="" class="Steam"/>
                                <p class="come-in-Steam">Войти через Steam</p>
                            </button>
                        </div>
                        

                        <div class="information">
                            <p class="people" id="information">xxx человек с нами</p>
                            <p class="cup" id="information">ххх турниров проведено</p>
                            <p class="money" id="information">ххх выиграно у нас</p>
                        </div>
                    </div>
                </section>

                <div class="line">
                    <hr color="#464663" size="0.5"/>
                </div>

                <h1>Главные турниры</h1>

                <div className='Card-news'>
                    <div style={{width: '100%', position: 'relative', height: 'max-content'}}>
                        <CardTournaments className='Go-Play' tournaments={filteredTournaments} />

                        <div class="more-event">
                            <Link to='/tournaments'><p class="text-more-event">Больше событий</p>
                            <img src={polygon} alt="" class="polygon"/></Link>
                        </div>
                    </div>

                    <div className='play-new-task'>
                        <div>
                            <GoPlayButton >
                                <img src={gamepad} alt="Gamepad" className="gamepad" />
                                <div className="join-2">
                                    <p className="join">Играть</p>
                                </div>
                            </GoPlayButton>
                        </div>
                        <div class="line2">
                            <hr color="#1C2034" size="0.5"/>
                        </div>
                        <News />
                        <Task />
                    </div>
                </div>

            </div>


            </main>
        <Footer/>
        </>

    );
};

export default MainIndex;