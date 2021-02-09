function ActualBaseReducer(state, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'INIT':
      newState = action.payload.data;
      return newState;
    case 'DELETE_WORD':
      let newItems = newState.words.filter(
        (item) => item.id != action.payload.word.id
      );
      return { ...newState, words: newItems };
    case 'ADD_WORD':
      newState = {
        ...newState,
        words: [...newState.words, action.payload.word],
      };
      return newState;
  }
}

export default ActualBaseReducer;
