function FastWordsReducer(state, action) {
  let newState = [...state];
  let localFastWords = localStorage.getItem('fast-words');
  switch (action.type) {
    case 'INIT':
      newState = action.payload.data;
      return newState;
    case 'ADD':
      if (localFastWords === null) {
        localStorage.setItem(
          'fast-words',
          JSON.stringify([action.payload.item])
        );
        newState = [...state, action.payload.item];
      } else {
        let isInludes = newState.filter(
          (item) => item.id === action.payload.item.id
        );

        if (isInludes.length === 0) {
          localFastWords = JSON.parse(localFastWords);
          let newLocalFastWords = [...newState, action.payload.item];
          localStorage.setItem('fast-words', JSON.stringify(newLocalFastWords));
          newState = [...newState, action.payload.item];
        }
      }
      return newState;
    case 'DELETE':
      localFastWords = JSON.parse(localFastWords);
      newState = newState.filter((item) => item.id != action.payload.item.id);
      localFastWords = localFastWords.filter(
        (item) => item.id != action.payload.item.id
      );
      localStorage.setItem('fast-words', JSON.stringify(localFastWords));

      return newState;

    case 'UPDATE':
      return newState;

    default:
      throw new Error();
  }
}

export default FastWordsReducer;
