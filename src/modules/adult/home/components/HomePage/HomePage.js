import React, { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';
import styled from 'styled-components';
import InformationCompound from 'modules/adult/home/components/InformationCompound/InformationCompound';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const infomrationComponents = [
  {
    id: 1,
    head: 'Gry',
    buttons: ['Gry', 'Poziomy', 'Rozwój'],
    element: [
      {
        id: 1,
        img: '1',
        head: 'Graj',
        text:
          'Przygotowalismy dla ciebie gry o różnych poziomach trudnosci które możesz wybrać albo skorzystac z pomocy wordkito i  dalej',
      },
      {
        id: 2,
        img: '2',
        head: 'Poziomy trudnosci',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 3,
        img: '3',
        head: 'Rozwój funkcji poznawczych',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    ],
  },
  {
    id: 2,
    head: 'Twórz',
    buttons: ['Słowka', 'Kategorie', 'Generuj'],
    element: [
      {
        id: 1,
        img: '1',
        head: 'Twórz własne słówka',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 2,
        img: '2',
        head: 'Twórz własne kategorie słów',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 3,
        img: '3',
        head: 'Generuj słowa z tekstu',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    ],
  },
  {
    id: 3,
    head: 'Korzystaj z Społecznosci',
    buttons: ['Kożystaj', 'Dziel się', 'Rozwijaj'],
    element: [
      {
        id: 1,
        img: '1',
        head: 'Korzystaj z baz innych użytkowników ',
        text:
          'Przygotowalismy dla ciebie gry o różnych poziomach trudnosci które możesz wybrać albo skorzystac z pomocy wordkito i  dalej',
      },
      {
        id: 2,
        img: '2',
        head: 'Sam twórz i publiuj bazy',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 3,
        img: '3',
        head: 'Rozwijaj swoje i inne bazy',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    ],
  },
  {
    id: 4,
    head: 'Poziom trudnosci dostosowany do Ciebie',
    buttons: ['Trenuj', 'Niewiem', 'Niewiem'],
    element: [
      {
        id: 1,
        img: '1',
        head: 'Trenuj swój osobisty algorytm',
        text:
          'Przygotowalismy dla ciebie gry o różnych poziomach trudnosci które możesz wybrać albo skorzystac z pomocy wordkito i  dalej',
      },
      {
        id: 2,
        img: '2',
        head: 'Nie wiem',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 3,
        img: '3',
        head: 'Nie wiem',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    ],
  },
  {
    id: 5,
    head: 'Rówież dla dzieci',
    buttons: ['Gry', 'Nauka', 'Monitoruj'],
    element: [
      {
        id: 1,
        img: '1',
        head: 'Gry przygotowane specjalnie dla dzieci',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 2,
        img: '2',
        head: 'Nauka liter słów',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 3,
        img: '3',
        head: 'Monitoruj postępy swoich dzieci',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    ],
  },
];

const HomePage = () => {
  const { authState } = useContext(AuthContext);
  if (authState.isAuth === true) {
    return <div>zalogowany</div>;
  } else {
    return (
      <>
        <StyledWrapper>
          <div>Home Page</div>
          {infomrationComponents.map((item) => {
            return (
              <InformationCompound key={item.id} head={item.head} data={item} />
            );
          })}

          <div>
            Cena. Z wordikto możesz kożystać za darmo w ograniczonym stopniu bez
            logowania dlatego że chcemy abys wypróbował główne funkcję takie jak
            gry i nasze bazy. Jednak żeby kożystać z społecznosci i
            automatycznego poziomu trudnosci jest konieczne zalogowanie się i
            korzystanie z baz danych i to wymaga większych zasobów. Dlatego
            dostęp do tych funkcjonalnoscie jest płatny. - fastwords - wszystkie
            gry - bazy wordkito - spolecznosc - pożyczanie baz innych członków -
            obserwowanie innych członków - tworzenie wlasnych baz - tworzenie
            wlasnych słow -wybór poziomu trudnosci - -automatyczny poziom
            trudnosci - monitorowanie postępów - zapisywanie wyników
            <b> Dla dzieci:</b>- wszystkie gry - - Monitorowanie postępów -
            wybór poziomu trudnosci - tworzenie słów przez rodzica -
          </div>
        </StyledWrapper>
      </>
    );
  }
};

export default HomePage;
