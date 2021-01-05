import React from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
`;

const StyledParagraph = styled.p`
  line-height: 150%;
  margin: 0 15px;

  @media (min-width: 600px) {
    margin: 0 40px;
  }
`;

const Description = () => {
  return (
    <Wraper>
      <StyledParagraph>
        Wszystkie przedstawione ćwiczenia są dobrane tak, aby były jak
        najskuteczniejsze, a ich wykonanie zajmowało jak najmniej czasu. Obszar
        został podzielony na sekcje, aby ewentualnie dobrać pod siebie ćwiczenia
        w miejscu w którym może występować największy problem. Przykładowo -
        jeżeli boli cię dolny odcinek pleców możesz dobrać więcej ćwiczeń z
        kategorii "Proste plecy", lub np. jeżeli zależy Ci na poprawie procesów
        myślowych poprzez lepsze dotlenienie organizmu wybierz sekcję "Oddech
        mocy". Każde ćwiczenie wykonujemy na powtórzenia - 20-30 powtórzeń w
        serii na każdą stronę. Wybierz jedną z poniższych kategorii, aby
        rozpocząć ćwiczenia.
      </StyledParagraph>
    </Wraper>
  );
};

export default Description;
