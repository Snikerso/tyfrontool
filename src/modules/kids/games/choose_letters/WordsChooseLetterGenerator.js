import React from 'react';
import { wordsPl } from './data';

const lettersPl = ['A', 'Ą', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

const WordsChooseLetterGenerator = ({ difficultyLevel, language }) => {
  let wybranyPoziom = 1;
  let data = [];

  const randomArray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * wordsPl.length)
  );

  // FUNKCJA WYBIERAJACA SŁOWA ODPOWIEDNIE DO JĘZYKA  która zwraca liste słów

  if (wybranyPoziom === 1) {
    for (let i of randomArray) {
      let slajd = {};

      slajd['id'] = wordsPl[i].id;
      slajd['image'] = wordsPl[i].image;
      slajd['voice'] = wordsPl[i].voice;
      slajd['lettersWidth'] = wordsPl[i].lettersWidth;
      const targetsBoolean = [];
      let j;
      for (j = 0; j < wordsPl[i].letters.length; j++) {
        if (
          j + 1 === wordsPl[i].letters.length &&
          targetsBoolean.includes(true) === false
        ) {
          targetsBoolean.push(true);
        } else if (targetsBoolean.includes(true) === false) {
          targetsBoolean.push(Boolean(Math.random() > 0.5));
        } else {
          targetsBoolean.push(false);
        }
      }
      slajd['targets'] = wordsPl[i].letters.map((item, key) => {
        return {
          id: key,
          letter: item,
          isTarget: targetsBoolean[key],
          isCorrect: !targetsBoolean[key],
          heightLetter: wordsPl[i].lettersWidth,
        };
      });

      let targetLetter = slajd.targets.filter((item) => item.isTarget === true);
      let letter;
      let letters = [];
      for (letter = 0; letter < 4; letter++) {
        const randomElement =
          lettersPl[Math.floor(Math.random() * lettersPl.length)];
        letters.push(randomElement);
      }
      if (letters.includes(targetLetter)) {
      } else {
        letters[1] = targetLetter[0].letter;
      }

      slajd['choices'] = letters.map((item, key) => {
        const locations = [
          { x: '20%', y: '60%' },
          { x: '20%', y: '80%' },
          { x: '60%', y: '60%' },
          { x: '60%', y: '80%' },
        ];
        return {
          id: key,
          letter: item,
          isTouched: false,
          isLocated: false,
          location: locations[key],
          heightLetter: wordsPl[i].lettersWidth,
        };
      });

      data.push(slajd);
    }
  }
  return data;
};

export default WordsChooseLetterGenerator;
