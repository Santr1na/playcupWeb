import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useClickOutside } from '../../hooks/useClickOutside';
import './Menu.css';
import steam from '../../icons/Steam.svg';
import cs from '../../icons/svg-cs2.svg';
import dota from '../../icons/svg-dota2.svg';
import gamepad from '../../icons/gamepad.svg';
import polygon from '../../icons/Polygon.svg';
import play from '../../icons/play.svg';
import balance from '../../icons/moneys.svg';
import bitcoin from '../../icons/bitcoin.svg';
// ... остальные импорты ...

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Стилизованные компоненты
const StyledMenu = styled.nav`
  background: #0D0E12;
  width: 440px;
  position: absolute;
  height: 100vw;
  top: 0;
  right: 0;
  z-index: 1;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(110%)")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(110%)")};
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.21, 0.99);
  
  animation: ${slideIn} 0.4s cubic-bezier(0.17, 0.67, 0.21, 0.99) forwards;
  
  @media (max-width: 576px) {
    width: 100%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(110%)")};
  }

  ${({ open }) => open && `
    transition-delay: 0.2s;
  `}
`;

const DropdownArrow = styled.svg`
  transition: transform 0.3s ease-out;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
`;

const FullSelectGameMenu = styled.div`
  margin-top: 16px;
  width: 100%;
  border-radius: 12px;
  background-color: #1E202B;
  color: #fff;
  display: ${({ open }) => (open ? 'block' : 'none')};
  animation: ${ fadeIn } 0.3s ease-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: translateY(${({ open }) => (open ? '0' : '-10px')});
  transition: all 0.3s ease-out;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

const GoPlayBtn = styled.button`
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  position: relative;
  display: flex;
  width: 380px;
  height: 86px;
  background: linear-gradient(90deg, rgba(24,37,53,1) 0%, rgba(9,84,177,1) 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin: 0px auto;
  transition: transform 0.2s ease, opacity 0.15s ease;
  
  ${StyledMenu}:not([open]) & {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const FullSettingsPlay = styled.div`
  position: relative;
  overflow-x: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transform: translateY(${({ open }) => (open ? '0' : '-10px')});
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: all 0.2s ease-out;
  justify-items: center;
  font-family: 'Inter';
  font-size: 20px;
  color: #fff;
  padding: ${({ open }) => (open ? '0 30px 30px 30px' : '0')};
  margin: -20px 30px;
  background-image: linear-gradient(135deg, #001125, #0954B1);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  z-index: 0;
  animation: ${fadeIn} 0.2s ease-out;
`;

// Компонент GameSettings
const GameSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settingsRef = useRef(null);

  useClickOutside(settingsRef, () => {
    if(isOpen) setTimeout(() => setIsOpen(false), 100);
  });

  return (
    <div ref={settingsRef}>
      <GoPlayBtn onClick={() => setIsOpen(!isOpen)}>
        <img src={gamepad} alt="Gamepad" className="gamepad" />
        <div className="join-2">
          <p className="join">Играть</p>
        </div>
      </GoPlayBtn>

      <FullSettingsPlay open={isOpen}>
        <div className="format-setting-play">
          <p>Формат</p>
          <div>
            <p>5v5</p>
            <img src={polygon} alt="Format options" className="format-setting-play-polygon" />
          </div>
        </div>

        <div className="line-setting-play">
          <hr color="#7C91B1" size="0.5" />
        </div>
        
        <div className="mode-setting-play">
          <p>Режим</p>
          <div>
            <p>Рейтинговая</p>
            <img src={polygon} alt="Mode options" className="mode-setting-play-polygon" />
          </div>
        </div>
        
        <div className="line-setting-play">
          <hr color="#7C91B1" size="0.5" />
        </div>

        <div className="region-setting-play">
          <p>Регион</p>
          <div>
            <p>Москва</p>
            <img src={polygon} alt="Region options" className="region-setting-play-polygon" />
          </div>
        </div>
        
        <div className="line-setting-play">
          <hr color="#7C91B1" size="0.5" />
        </div>
        
        <button className="search-play">
          <img src={play} alt="Search game" />
          <p>Поиск игры</p>
        </button>
      </FullSettingsPlay>
    </div>
  );
};

// Основной компонент Menu
const Menu = ({ open }) => {
  const [isGameMenuOpen, setGameMenuOpen] = useState(false);
  const ActiveGameRef = useRef(null);
  
  useClickOutside(ActiveGameRef, () => {
    if(isGameMenuOpen) setTimeout(() => setGameMenuOpen(false), 50);
  });

  return (
    <StyledMenu open={open}>
      <div style={{display: 'none'}}>
      <div className="select-game-menu" onClick={() => setGameMenuOpen(!isGameMenuOpen)} ref={ActiveGameRef}>
        <div className="active-game">
          <img src={cs} alt="CS2" className="image-game-menu" />
          <p className="name-game-menu">CS2</p>
          <DropdownArrow 
            open={isGameMenuOpen} id="pol" className="dropdown-arrow-select-game-menu" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.08826 0.330127C7.85806 0.330127 8.33919 1.16346 7.95429 1.83013L5.35621 6.33013C4.97131 6.99679 4.00906 6.99679 3.62416 6.33013L1.02608 1.83013C0.641184 1.16346 1.12231 0.330127 1.89211 0.330127L7.08826 0.330127Z" fill="white" />
          </DropdownArrow>
        </div>
        
        <FullSelectGameMenu open={isGameMenuOpen}>
          <div className="first-select-game-menu">
            <img src={cs} alt="CS2" className="first-image-game-menu" />
            <p className="first-name-game-menu">CS2</p>
          </div>

          <div className="line-selection-game-menu">
            <hr color="#464663" size="0.5" />
          </div>

          <div className="two-select-game-menu">
            <img src={dota} alt="DOTA 2" className="two-image-game-menu" />
            <p className="two-name-game-menu">DOTA 2</p>
          </div>
        </FullSelectGameMenu>
      </div>

      <GameSettings />

      <div className="full-tabs-menu">
      <div class="full-tabs-menu">
                <div class="up-tabs-menu">
                    <div class="balance-menu">
                        <div class="left-balance-menu">
                            <img src={balance} alt="" class="image-balance-menu"/>
                            <p>Баланс:</p>
                            <p class="how-money-balance-menu">10</p>
                            <img src={bitcoin} alt="" class="bitcoin-menu"/>
                        </div>
                        <div class="right-balance-menu">
                            <svg width="32" height="32" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" class="balance-deposit">
                                <path d="M9.99951 20.3877H29.9995" stroke="#717171" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20 30.3877V10.3877" stroke="#717171" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                
                        </div>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                    <div class="profile-menu">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="image-profile-menu">
                            <path d="M16.0002 16.388C19.6821 16.388 22.6668 13.4033 22.6668 9.72135C22.6668 6.03946 19.6821 3.05469 16.0002 3.05469C12.3183 3.05469 9.3335 6.03946 9.3335 9.72135C9.3335 13.4033 12.3183 16.388 16.0002 16.388Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.4535 29.721C27.4535 24.561 22.3202 20.3877 16.0002 20.3877C9.6802 20.3877 4.54688 24.561 4.54688 29.721" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            
                        <p>Профиль</p>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                    <div class="friends-menu">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="image-friends-menu">
                            <path d="M12.2129 14.8814C12.0796 14.868 11.9196 14.868 11.7729 14.8814C8.59959 14.7747 6.07959 12.1747 6.07959 8.97469C6.07959 5.70802 8.71959 3.05469 11.9996 3.05469C15.2663 3.05469 17.9196 5.70802 17.9196 8.97469C17.9063 12.1747 15.3863 14.7747 12.2129 14.8814Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.8804 5.7207C24.467 5.7207 26.547 7.81404 26.547 10.3874C26.547 12.9074 24.547 14.9607 22.0537 15.054C21.947 15.0407 21.827 15.0407 21.707 15.054" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.54646 19.8007C2.3198 21.9607 2.3198 25.4807 5.54646 27.6274C9.21313 30.0807 15.2265 30.0807 18.8931 27.6274C22.1198 25.4674 22.1198 21.9474 18.8931 19.8007C15.2398 17.3607 9.22646 17.3607 5.54646 19.8007Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.4531 27.0547C25.4131 26.8547 26.3198 26.468 27.0665 25.8947C29.1465 24.3347 29.1465 21.7614 27.0665 20.2014C26.3331 19.6414 25.4398 19.268 24.4931 19.0547" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            
                        <p>Друзья</p>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                    <div class="history-play-menu">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="image-history-play-menu">
                            <path d="M12.7595 17.001L8.69287 21.0676" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.7334 17.041L12.8001 21.1077" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.0405 19.0547H18.0539" stroke="#717171" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.293 19.0547H23.3063" stroke="#717171" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.6665 21.6946V21.668" stroke="#717171" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.6665 16.4407V16.4141" stroke="#717171" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9998 29.721H19.9998C26.6665 29.721 29.3332 27.0544 29.3332 20.3877V17.721C29.3332 11.0544 26.6665 8.3877 19.9998 8.3877H11.9998C5.33317 8.3877 2.6665 11.0544 2.6665 17.721V20.3877C2.6665 27.0544 5.33317 29.721 11.9998 29.721Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.3473 3.05469L17.334 4.40135C17.3206 5.13469 16.734 5.72135 16.0006 5.72135H15.9606C15.2273 5.72135 14.6406 6.32135 14.6406 7.05469C14.6406 7.78802 15.2406 8.38802 15.974 8.38802H17.3073" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            
                        <p>История игр</p>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                    <div class="message-menu">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="image-message-menu">
                            <path d="M11.765 25.1718L12.0237 24.2058C11.7875 24.1426 11.5364 24.168 11.3178 24.2773L11.765 25.1718ZM5.33317 28.3877L4.34322 28.2463C4.29062 28.6145 4.44672 28.9815 4.74846 29.1989C5.0502 29.4164 5.44771 29.4485 5.78038 29.2821L5.33317 28.3877ZM6.20414 22.2909L7.19409 22.4323C7.24219 22.0956 7.11586 21.7576 6.85875 21.5349L6.20414 22.2909ZM15.9998 26.721C23.6962 26.721 30.3332 21.6944 30.3332 15.0544H28.3332C28.3332 20.1964 23.0311 24.721 15.9998 24.721V26.721ZM11.5064 26.1377C12.9217 26.5167 14.4327 26.721 15.9998 26.721V24.721C14.6063 24.721 13.2693 24.5393 12.0237 24.2058L11.5064 26.1377ZM5.78038 29.2821L12.2122 26.0662L11.3178 24.2773L4.88596 27.4933L5.78038 29.2821ZM5.21419 22.1495L4.34322 28.2463L6.32312 28.5291L7.19409 22.4323L5.21419 22.1495ZM1.6665 15.0544C1.6665 18.1857 3.17365 20.9896 5.54954 23.0469L6.85875 21.5349C4.84281 19.7893 3.6665 17.5087 3.6665 15.0544H1.6665ZM15.9998 3.3877C8.30352 3.3877 1.6665 8.41434 1.6665 15.0544H3.6665C3.6665 9.91231 8.96856 5.3877 15.9998 5.3877V3.3877ZM30.3332 15.0544C30.3332 8.41434 23.6962 3.3877 15.9998 3.3877V5.3877C23.0311 5.3877 28.3332 9.91231 28.3332 15.0544H30.3332Z" fill="#717171"/>
                        </svg>
                            
                        <p>Сообщения</p>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                    <div class="tech-support-menu">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="image-tech-support-menu">
                            <path d="M14.3343 3.65445C15.2676 2.86779 16.7743 2.86779 17.681 3.65445L19.7877 5.45445C20.1877 5.78779 20.9477 6.06779 21.481 6.06779H23.7476C25.161 6.06779 26.321 7.22779 26.321 8.64112V10.9078C26.321 11.4411 26.601 12.1878 26.9343 12.5878L28.7343 14.6945C29.521 15.6278 29.521 17.1345 28.7343 18.0411L26.9343 20.1478C26.601 20.5478 26.321 21.2945 26.321 21.8278V24.0945C26.321 25.5078 25.161 26.6678 23.7476 26.6678H21.481C20.9477 26.6678 20.201 26.9478 19.801 27.2811L17.6943 29.0811C16.761 29.8678 15.2543 29.8678 14.3477 29.0811L12.241 27.2811C11.841 26.9478 11.081 26.6678 10.561 26.6678H8.22765C6.81432 26.6678 5.65432 25.5078 5.65432 24.0945V21.8145C5.65432 21.2945 5.38765 20.5345 5.05432 20.1478L3.25432 18.0278C2.48098 17.1078 2.48098 15.6145 3.25432 14.6945L5.05432 12.5745C5.38765 12.1745 5.65432 11.4278 5.65432 10.9078V8.65445C5.65432 7.24112 6.81432 6.08112 8.22765 6.08112H10.5343C11.0676 6.08112 11.8143 5.80112 12.2143 5.46779L14.3343 3.65445Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 11.2275V17.6675" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.9922 21.7207H16.0042" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            
                        <p>Техническая поддержка</p>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                    <div class="settings-menu">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="image-setting-menu">
                            <path d="M11.9998 29.7214H19.9998C26.6665 29.7214 29.3332 27.0547 29.3332 20.388V12.388C29.3332 5.72135 26.6665 3.05469 19.9998 3.05469H11.9998C5.33317 3.05469 2.6665 5.72135 2.6665 12.388V20.388C2.6665 27.0547 5.33317 29.7214 11.9998 29.7214Z" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.7603 25.0545V19.8545" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.7603 10.3207V7.7207" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.7611 17.2546C22.6757 17.2546 24.2278 15.7025 24.2278 13.788C24.2278 11.8734 22.6757 10.3213 20.7611 10.3213C18.8465 10.3213 17.2944 11.8734 17.2944 13.788C17.2944 15.7025 18.8465 17.2546 20.7611 17.2546Z" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.2397 25.0541V22.4541" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.2397 12.9207V7.7207" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.2401 22.4548C13.1547 22.4548 14.7068 20.9027 14.7068 18.9882C14.7068 17.0736 13.1547 15.5215 11.2401 15.5215C9.32552 15.5215 7.77344 17.0736 7.77344 18.9882C7.77344 20.9027 9.32552 22.4548 11.2401 22.4548Z" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            
                        <p>Настройки</p>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                    <div class="exit-menu">
                      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="image-exit-menu">
                          <path d="M11.8667 10.968C12.28 6.16801 14.7467 4.20801 20.1467 4.20801H20.32C26.28 4.20801 28.6667 6.59467 28.6667 12.5547V21.248C28.6667 27.208 26.28 29.5947 20.32 29.5947H20.1467C14.7867 29.5947 12.32 27.6613 11.88 22.9413" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M2.6665 16.8877H19.8398" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M16.8667 12.4219L21.3334 16.8885L16.8667 21.3552" stroke="#717171" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                          
                      <p>Выход</p>
                    </div>

                    <div class="line-tabs-menu">
                        <hr color="#717171" size="0.5"/>
                    </div>

                </div>
        </div>
      </div>
      </div>

      <div className='Enter-Steam-Menu'>
        <p style={{color: '#fff', fontSize: '24px', paddingBottom: '30px'}}>Впервые здесь?</p>
        <button className='EnterSteam'>
          <img src={steam}/>
          <h4>Войти через Steam</h4>
        </button>
      </div>
      
    </StyledMenu>
  );
};

export default Menu;