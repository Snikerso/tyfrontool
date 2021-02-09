import React, { useState } from 'react';
import LetterSwitch from './helpers/LetterSwitch';

const Choice = React.forwardRef((props, ref) => {
  const {
    item,
    handleDrag,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    id,
  } = props;
  return LetterSwitch(props, ref);
});

export default Choice;
