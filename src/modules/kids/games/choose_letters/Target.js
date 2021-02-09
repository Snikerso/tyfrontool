import React, { useState } from 'react';

import LetterSwitch from './helpers/LetterSwitch';
const Target = React.forwardRef((props, ref) => {
  return LetterSwitch(props, ref);
});

export default Target;
