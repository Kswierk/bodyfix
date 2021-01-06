import React from 'react';
import MainHeader from '../../MainHeader';
import Description from './Description';
import SectionCard from './SectionCard';
import { excercisesData } from './data';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

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
      {excercisesData.map((item, index) => {
        return (
          <>
            <StyledLink key={index} to={item.link}>
              <SectionCard
                reverse={item.reverse}
                key={index}
                text={item.text}
                img={item.img}
              />
            </StyledLink>
            {/* <VerticalLine /> */}
          </>
        );
      })}
    </div>
  );
};

export default Excercises;
