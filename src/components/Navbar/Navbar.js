import React, { useState } from 'react';
import Dropdown from './Dropdown';

import { BiMenuAltLeft } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { IoMdArrowDropdownCircle } from 'react-icons/io';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 500;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    /* margin-left: 20px; */
    transform: translate(25%, 60%);
  }
`;

const LogoSpan = styled.span`
  font-size: 0.8rem;
  margin-left: 10px;
  font-family: 'Orbitron', sans-serif;
  color: #1888ff;
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
  z-index: 500;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${(props) => (props.click ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${(props) => (props.click ? '#242222' : 'transparent')};
  }
`;

const BurgerLines = styled(BiMenuAltLeft)`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const BurgerClose = styled(IoMdClose)`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;

const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: ${(props) => (props.arrow ? 'flex' : 'inintial')};
  align-items: center;
  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;

    @media screen and (max-width: 960px) {
      background-color: #1888ff;
      border-radius: 0;
    }
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

const ArrowDown = styled(IoMdArrowDropdownCircle)`
  margin-left: 5px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <StyledNav>
        <NavLogo to="/">
          Bodyfix
          <LogoSpan>
            for
            <br /> programmers
          </LogoSpan>
        </NavLogo>
        <div onClick={handleClick}>
          {click ? <BurgerClose /> : <BurgerLines />}
        </div>
        <NavMenu click={click}>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Tutaj zacznij
            </NavLinks>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {dropdown && <Dropdown />}
            <NavLinks arrow="true" to="/excercises" onClick={closeMobileMenu}>
              Ćwiczenia <ArrowDown />
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/daily" onClick={closeMobileMenu}>
              Wylosuj dzisiejsze ćwiczenia
            </NavLinks>
          </NavItem>
        </NavMenu>
      </StyledNav>
    </>
  );
};

export default Navbar;
