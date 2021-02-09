function FiltrationsReducer(state, action) {
  let newState = { ...state };

  switch (action.type) {
    case 'SEARCHING':
      console.log(action.payload.searching);
      return { ...newState, searching: action.payload.searching };
    case 'COLOR':
      return { ...(newState.serching = action.payload.searching) };

    default:
      throw new Error();
  }
}

export default FiltrationsReducer;
