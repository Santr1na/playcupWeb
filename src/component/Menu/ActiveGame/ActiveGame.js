import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import './ActiveGame.css';
import { useClickOutside } from '../../../hooks/useClickOutside';
import cs from '../../../icons/svg-cs2.svg';
import dota from '../../../icons/svg-dota2.svg';

// Анимация для выпадающего меню
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledSelectGameMenu = styled.div`
  position: relative;
  font-family: "REM", sans-serif;
  font-weight: 800;
  font-size: 20px;
  padding: 30px;
  cursor: pointer;
`;

const FullSelectGameMenu = styled.div`
  position: absolute;
  margin-top: 16px;
  width: max-content;
  border-radius: 12px;
  color: #fff;
  background-color:rgb(29, 32, 44);
  display: ${({ open }) => (open ? 'block' : 'none')};
  animation: ${fadeIn} 0.3s ease-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: translateY(${({ open }) => (open ? '0' : '-10px')});
  transition: all 0.3s ease-out;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const DropdownArrow = styled.svg`
  transition: transform 0.3s ease-out;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
`;


const ActiveGame = () => {
  const [isGameMenuOpen, setGameMenuOpen] = useState(false);
  const [isGameSettingsOpen, setGameSettingsOpen] = useState(false);
  
  const ActiveGameRef = useRef(null);
  const GameSettingsRef = useRef(null);
  
  useClickOutside(ActiveGameRef, () => {
    if(isGameMenuOpen) setTimeout(() => setGameMenuOpen(false), 50);
  });
  
  useClickOutside(GameSettingsRef, () => {
    if(isGameSettingsOpen) setTimeout(() => setGameSettingsOpen(false), 50);
  });

  return (
      <StyledSelectGameMenu 
        onClick={() => setGameMenuOpen(!isGameMenuOpen)}
        ref={ActiveGameRef}
      >
        <div className="active-game">
          <img src={cs} alt="CS2" className="image-game-menu"/>
          <p className="name-game-menu">CS2</p>
          <DropdownArrow 
            open={isGameMenuOpen}
            id="pol" 
            className="dropdown-arrow-select-game-menu" 
            width="9" 
            height="7" 
            viewBox="0 0 9 7" 
            fill="none"
          >
            <path d="M7.08826 0.330127C7.85806 0.330127 8.33919 1.16346 7.95429 1.83013L5.35621 6.33013C4.97131 6.99679 4.00906 6.99679 3.62416 6.33013L1.02608 1.83013C0.641184 1.16346 1.12231 0.330127 1.89211 0.330127L7.08826 0.330127Z" fill="white"/>
          </DropdownArrow>
        </div>
        
        <FullSelectGameMenu open={isGameMenuOpen}>
          <div className="first-select-game-menu">
            <img src={cs} alt="CS2" className="first-image-game-menu"/>
            <p className="first-name-game-menu">CS2</p>
          </div>

          <div className="line-selection-game-menu">
            <hr color="#464663" size="0.5"/>
          </div>

          <div className="two-select-game-menu">
            <img src={dota} alt="DOTA 2" className="two-image-game-menu"/>
            <p className="two-name-game-menu">DOTA 2</p>
          </div>
        </FullSelectGameMenu>
      </StyledSelectGameMenu>
  );
};


export default ActiveGame;