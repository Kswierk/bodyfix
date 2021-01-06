import React from 'react';
import MainHeader from '../../MainHeader';
import Description from './Description';
import SectionCard from './SectionCard';
import { excercisesData } from './data';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// const VerticalLine = styled.div`
//   display: block;
//   background-color: blue;
//   height: 50px;
//   width: 2px;
//   margin: 0 auto;
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, -100%) rotate(-45deg);
// `;

const Excercises = () => {
  return (
    <div>
      <MainHeader text="ćwiczenia" />
      <Description />
      {excercisesData.map((item) => {
        return (
          <StyledLink key={uuidv4()} to={item.link}>
            <SectionCard
              key={uuidv4()}
              reverse={item.reverse}
              text={item.text}
              img={item.img}
            />
          </StyledLink>
        );
      })}
    </div>
  );
};

export default Excercises;
