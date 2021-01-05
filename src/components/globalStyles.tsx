import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

   html{
     scroll-behavior: smooth;
   }

    body{
background: linear-gradient(0deg, rgba(239,239,239,1) 0%, rgba(255,255,255,1) 70%);
background-repeat: no-repeat;

    overflow-x: hidden;
      @media(min-width: 960px){

      background: linear-gradient(
      90deg,
      rgba(239, 239, 239, 1) 0%,
      rgba(255, 255, 255, 1) 50%
    );
      }
    }
`;

export default GlobalStyle;
