import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "#FFF" : "#FFF")};
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(10px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

    @media (max-width: 1100px) {
      top: 20px;
    }

    @media(max-width: 768px){
      top: 21px; 
      width: 0.5rem;
      height: 1.3rem;

      div{
        width: 1.3rem;
      }
    }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger 
      open={open} 
      onClick={() => setOpen(!open)}
      aria-label={open ? "Закрыть меню" : "Открыть меню"}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;