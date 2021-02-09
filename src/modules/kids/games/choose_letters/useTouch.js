import React, { useRef, useReducer, useEffect, useState } from 'react';
import ChooseLetterReducer from './ChooseLetterReducer';

const FilterActualTarget = (choicesRef, firstTouch, actualTouchedId) => {
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
  const targetsRef = useRef([]);
  const choicesRef = useRef([]);
  const [actualTouchedId, setActualTouchedID] = useState(null);

  const handleTouchStart = (e) => {
    let firstTouchChoice;
    let firstTouchChoiceId;
    let firstTouch = e.changedTouches[0];
    if (e.changedTouches[0].target.getAttribute('id') === null) {
      firstTouchChoice = e.changedTouches[0].target.ownerSVGElement.getBoundingClientRect();
      firstTouchChoiceId = e.changedTouches[0].target.ownerSVGElement.getAttribute(
        'id'
      );
    } else {
      firstTouchChoice = e.changedTouches[0].target.getBoundingClientRect();
    }

    let choiceTouched = FilterActualTarget(choicesRef, firstTouchChoice);
    const choiceTouchedID = choiceTouched[0].getAttribute('id');
    setActualTouchedID(choiceTouchedID);
    console.log(choiceTouched);
    if (chooseLetterState.choices[choiceTouchedID].isLocated !== true) {
      // console.log(firstTouch.pageX - firstTouchChoice.width / 2);
      choicesRef.current[choiceTouchedID].setAttribute(
        'style',
        `position: absolute;left: ${
          firstTouch.pageX - firstTouchChoice.width / 2
        }px;top: ${firstTouch.pageY - firstTouchChoice.height / 2}px;`
      );

      // choicesRef.current[choiceTouchedID].style['top'] =
      //   firstTouch.pageY - firstTouchChoice.height / 2;

      chooseLetterDispatch({
        type: 'TOUCHACTIVE',
        payload: { id: choiceTouchedID },
      });
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    let firstTouch = e.changedTouches[0];
    let firstChoiceTouch;
    let firstChoiceTouchId;
    if (e.changedTouches[0].target.getAttribute('id') === null) {
      firstChoiceTouch = e.changedTouches[0].target.ownerSVGElement.getBoundingClientRect();
      firstChoiceTouchId = e.changedTouches[0].target.ownerSVGElement.getAttribute(
        'id'
      );
    } else {
      firstChoiceTouch = e.touches[0].target.getBoundingClientRect();
    }
    let choiceTouched = FilterActualTarget(
      choicesRef,
      firstChoiceTouch,
      actualTouchedId
    );
    const choiceTouchedID = choiceTouched[0].getAttribute('id');
    if (true) {
      choicesRef.current[choiceTouchedID].setAttribute(
        'style',
        `position: absolute;left: ${
          firstTouch.pageX - firstChoiceTouch.width / 2
        }px;top: ${firstTouch.pageY - firstChoiceTouch.height / 2}px;`
      );
      // choicesRef.current[choiceTouchedID].style['left'] =
      //   firstTouch.pageX - firstChoiceTouch.width / 2;
      // choicesRef.current[choiceTouchedID].style['top'] =
      //   firstTouch.pageY - firstChoiceTouch.height / 2;

      // chooseLetterDispatch({
      //   type: 'TOUCHLOCATIONELEMENT',
      //   payload: {
      //     id: choiceTouchedID,
      //   },
      // });
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    let lastTouchElement = e.target.getBoundingClientRect();
    const lastTouch = e.changedTouches[0];
    let choiceTouched = FilterActualTarget(choicesRef, lastTouchElement);
    const choiceTouchedID = choiceTouched[0].getAttribute('id');
    let touchLetter = choiceTouched[0].getAttribute('letter');
    let touchID = choiceTouched[0].getAttribute('id');
    let lastTouchPosition = { x: lastTouch.pageX, y: lastTouch.pageY };
    console.log(targetsRef);
    let elementEndTouched = targetsRef.current.filter((item) => {
      if (item === null) {
      } else {
        let position = item.getBoundingClientRect();
        let positionElement = {
          x_start: position.x,
          x_end: position.x + position.width,
          y_start: position.y,
          y_end: position.y + position.height,
        };

        if (
          positionElement.x_start <= lastTouchPosition.x &&
          positionElement.x_end >= lastTouchPosition.x &&
          positionElement.y_start <= lastTouchPosition.y &&
          positionElement.y_end >= lastTouchPosition.y
        ) {
          return item;
        } else {
          return;
        }
      }
    });

    if (
      elementEndTouched.length > 0 &&
      elementEndTouched[0].getAttribute('letter') === touchLetter
    ) {
      const elementEndTouchedPosition = elementEndTouched[0].getBoundingClientRect();
      return (
        (choicesRef.current[choiceTouchedID].style['left'] =
          elementEndTouchedPosition.x),
        (choicesRef.current[choiceTouchedID].style['top'] =
          elementEndTouchedPosition.y),
        chooseLetterDispatch({
          type: 'TOUCHLOCATIONELEMENT',
          payload: {
            choiceId: choiceTouchedID,
            targetId: elementEndTouched[0].getAttribute('id'),
          },
        })
      );
    } else if (chooseLetterState.choices[choiceTouchedID].isLocated !== true) {
      console.log(choicesRef.current[choiceTouchedID]);
      return choicesRef.current[choiceTouchedID].setAttribute(
        'style',
        `position: absolute;left: ${chooseLetterState.choices[choiceTouchedID].location.x};top: ${chooseLetterState.choices[choiceTouchedID].location.y};`
      );
      // (choicesRef.current[choiceTouchedID].style['left'] =
      //   chooseLetterState.choices[choiceTouchedID].location.x),
      // (choicesRef.current[choiceTouchedID].style['top'] =
      //   chooseLetterState.choices[choiceTouchedID].location.y)
    }
  };

  return {
    targetsRef,
    choicesRef,
    chooseLetterState,
    chooseLetterDispatch,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
