import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import styled, { StyledFunction } from 'styled-components';

const DropdownMenu = styled.ul<ClickProps>`
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
  display: ${(props) => (props.click ? 'none' : 'initial')};
`;

const DropdownLi = styled.li`
  background-color: royalblue;
  cursor: pointer;
`;

const DropdownLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  text-decoration: none;
  padding: 16px;
  transition: 0.3s ease;

  &:hover {
    background-color: #1888ff;
    border-radius: 0;
  }
`;

interface ClickProps {
  readonly click: boolean;
}

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <>
        <DropdownMenu onClick={handleClick} click={click}>
          {MenuItems.map((item, index) => {
            return (
              <DropdownLi key={index}>
                <DropdownLink to={item.path} onClick={() => setClick(false)}>
                  {item.title}
                </DropdownLink>
              </DropdownLi>
            );
          })}
        </DropdownMenu>
      </>
    </div>
  );
};

export default Dropdown;
