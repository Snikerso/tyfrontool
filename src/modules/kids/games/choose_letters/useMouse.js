import React, { useRef, useReducer, useEffect } from 'react';
import ChooseLetterReducer from './ChooseLetterReducer';

const FilterActualTarget = (choicesRef, firstTouch) => {
  let choiceTouched = choicesRef.current.filter((item) => {
    let position = item.getBoundingClientRect();
    let positionElement = {
      x_start: position.x,
      x_end: position.x + position.width,
      y_start: position.y,
      y_end: position.y + position.height,
    };

    if (
      positionElement.x_start <= firstTouch.x &&
      positionElement.x_end >= firstTouch.x &&
      positionElement.y_start <= firstTouch.y &&
      positionElement.y_end >= firstTouch.y
    ) {
      return item;
    } else {
      return null;
    }
  });
  return choiceTouched;
};

export const useTouch = ({ slajdData, currentPage }) => {
  const [chooseLetterState, chooseLetterDispatch] = useReducer(
    ChooseLetterReducer,
    slajdData
  );

  useEffect(() => {
    chooseLetterDispatch({
      type: 'CHANGESLAJD',
      payload: { slajdData: slajdData },
    });
  }, [currentPage]);

  const targetsRef = useRef([]);
  const choicesRef = useRef([]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    let firstTouchy = e.touches[0];
    let firstTouch = e.touches[0].target.getBoundingClientRect();
    let choiceTouched = FilterActualTarget(choicesRef, firstTouch);
    const choiceTouchedID = choiceTouched[0].getAttribute('id');

    if (chooseLetterState.choices[choiceTouchedID].isLocated !== true) {
      choicesRef.current[choiceTouchedID].style['left'] =
        firstTouchy.pageX - firstTouch.width / 3;
      choicesRef.current[choiceTouchedID].style['top'] =
        firstTouchy.pageY - firstTouch.height / 2;

      chooseLetterDispatch({
        type: 'TOUCHACTIVE',
        payload: { id: choiceTouchedID },
      });
    }
  };

  return {
    targetsMouseRef,
    choicesMouseRef,

    handleMouseDown,
  };
};
