import React from 'react';
import styled from 'styled-components';
// import back from '../../../assets/images/lowback.png';

const Wraper = styled.div<ReverseType>`
  max-width: 1200px;
  display: flex;
  flex-direction: ${(props) =>
    props.reverse === 'true' ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

const ParaWraper = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    width: 50vw;
    background-color: royalblue;
    border-radius: 10px;
    height: 300px;
  }
`;

const Paragraph = styled.p`
  display: none;
  align-self: center;

  @media (min-width: 600px) {
    display: initial;
    color: #fff;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const ImgWraper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

const ImgDescription = styled.p`
  z-index: 10;
  position: absolute;
  font-size: 1.5rem;
  background-color: rgba(120, 120, 120, 0.7);
  padding: 1rem 2rem;
  border-radius: 10px;

  @media (min-width: 600px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 300px;
`;
// interface IIMgType {
//   src: string;
//   alt: string;
// }

interface ReverseType {
  reverse: string;
}

interface CardTypes {
  text: string;
  img: string;
  reverse: string;
}

const SectionCard = ({ text, img, reverse }: CardTypes) => {
  return (
    <Wraper reverse={reverse}>
      <ParaWraper>
        <Paragraph>{text}</Paragraph>
      </ParaWraper>
      <ImgWraper>
        <ImgDescription>proste plecy</ImgDescription>
        <Img src={img} alt="back" />
      </ImgWraper>
    </Wraper>
  );
};

export default SectionCard;
