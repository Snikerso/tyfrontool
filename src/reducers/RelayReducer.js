function RelayReducer(state, action) {
  let newState = { ...state };
  console.log(newState);
  switch (action.type) {
    case 'GAMENAME':
      console.log(action.payload.gamename);
      newState.gamename = action.payload.gamename;
      return newState;
    case 'DIFFICULT':
      console.log(action.payload.isWordyDifficult);
      console.log(action.payload.difficultylevel);
      newState.isAutomationDifficult = action.payload.isAutomationDifficult;
      newState.difficultylevel = action.payload.difficultylevel;
      return newState;

    case 'WORDS':
      newState.isBaseWords = action.payload.isBaseWords;
      newState.basename = action.payload.basename;
      if (action.payload.fastWords) {
        newState.fastWords = action.payload.fastWords;
      }

      return newState;

    default:
      throw new Error();
  }
}

export default RelayReducer;
