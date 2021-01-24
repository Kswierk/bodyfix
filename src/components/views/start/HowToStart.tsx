import React from 'react';
import SectionHeader from '../../SectionHeader';

import styled from 'styled-components';

const Wraper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledParagraph = styled.p`
  margin: 0 40px;
  line-height: 150%;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 15px 40px;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 10px 0 0 25px;
  font-size: 1.2rem;
  font-weight: 500;
  ::before {
    content: '‣';
    position: relative;
    margin-right: 15px;
    color: #1888ff;
    font-size: 1.5rem;
    line-height: 12px;
  }
`;

const HowToStart = () => {
  return (
    <Wraper>
      <SectionHeader text="Dlaczego warto dbać o prawidłową postawę ciała" />
      <StyledParagraph>
        Nie będę zagłębiał się w książkowe definicje za co
        odpowiedzialne są poszczególne części naszego ciała bo
        prawdopodobnie nie po to tutaj przyszedłeś. Moim głównym celem
        jest nakreślenie problemów do jakich może prowadzić nadmierne
        przebywanie w pozycji siedzącej oraz przekazanie Ci dokładnie
        tego czego potrzebujesz aby im zapobiec. Głównymi skutkami
        długotrwałego siedzenia są przede wszystkim:
      </StyledParagraph>
      <StyledList>
        <StyledLi>ból kręgosłupa,</StyledLi>
        <StyledLi>
          spowolnienie proceców myślowych spowodowane słabszym
          dotlenieniem mózgu,
        </StyledLi>
        <StyledLi>
          ból szyi spowodowany nadmiernym napięciem szyi,
        </StyledLi>
        <StyledLi>
          wystająca do przodu głowa połączona z cofniętym do tyłu
          biodrem
        </StyledLi>
        <StyledLi>
          ogólne pogorszenie postawy ciała i sylwetki
        </StyledLi>
      </StyledList>
      <StyledParagraph>
        Wszystkie powyższe potrafią pociągnąć za sobą szereg
        następnych problemów zdrowotnych które również mogą pogorszyć
        jakość naszego życia. Do rzeczy.
      </StyledParagraph>
      <StyledParagraph>
        Program podzielony jest na sekcje - każda opisuje jakie
        ćwiczenia należy wykonywać na daną partię ciała aby zadbać o
        prawidłową postawę ciała i poprawić procesy myślowe. Ćwiczenia
        dobrane są tak, aby były jak najskuteczniejsze a wykonanie
        zajmowało jak najmniej czasu. Wykonanie całego cyklu zajmuje
        około 3-5 minut. Najskuteczniejsze jest wykonywanie ćwiczeń w
        przerwach w pracy, im częsciej tym lepiej ale nie mniej niż 1
        raz dziennie. Do wykonywania wszystkich opisanych ćwiczeń
        wystarczy kawałek podłogi o długości naszego ciała, oraz
        szerokości na rozpiętość ramion. Nie przedłużając - zachęcam
        do przeczytania dokładniejszych informacji w każdej z sekcji.
        Jeżeli jednak chciałbyś odrazu przejść do ćwiczeń wystaczy
        wylosować swój zestaw ćwiczeń obejmujący całe ciało.
        Powodzenia!
      </StyledParagraph>
      <SectionHeader text="Jak poprawnie siedzieć przy biurku?" />
      <StyledParagraph>
        Zacznijmy od sprawy elementarnej – jaką właściwie powinno się
        przybrać postawę siedząc przez wiele godzin przed komputerem?
        Jeżeli będzie to krzesło , powinno się ustawić stopy płasko na
        ziemi, natomiast kolana trzymać w pozycji zgiętej mniej-więcej
        pod kątem prostym. Takie ułożenie nóg ułatwia utrzymanie
        prawidłowej pozycji pleców. A jak same plecy ustawić?
        Oczywiście prosto (choć, co ciekawe niekoniecznie w pionie,
        dopóki tułów będzie prosty, dopuszczalne jest lekkie
        odchylenie do przodu lub w tył), z wyprostowaną szyją (ta już
        zdecydowanie pionowo) i – o czym już nie każdy pamięta – z
        lekko cofniętymi barkami i odciągniętymi do tył łopatkami. Ale
        uwaga – w przypadku odchylenia w przód kąt ugięcia nóg
        powinien maleć,a przy odchyleniu lekko wzrastać.
      </StyledParagraph>
    </Wraper>
  );
};

export default HowToStart;
