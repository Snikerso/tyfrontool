function reducerChooseLetter(state, action) {
  let newArr = { ...state };

  switch (action.type) {
    case 'CHANGESLAJD':
      return action.payload.slajdData;
    case 'TOUCHACTIVE':
      if (newArr.choices[action.payload.id].isLocated == false) {
        newArr.choices[action.payload.id].isTouched = true;

        return newArr;
      } else {
        return state;
      }

    case 'TOUCHDISACTIVE':
      newArr.choices[action.payload.id].isTouched = false;
      // jezeli action.payload. match is correct to sie to wykonuje
      // if (true) {
      //   console.log(newArr.targets[action.payload.id]);
      // }

      return newArr;

    case 'TOUCHLOCATIONELEMENT':
      newArr.choices[action.payload.choiceId].isTouched = false;
      newArr.choices[action.payload.choiceId].isLocated = true;
      newArr.targets[action.payload.targetId].isCorrect = true;

      return newArr;

    default:
      throw new Error();
  }
}

export default reducerChooseLetter;
