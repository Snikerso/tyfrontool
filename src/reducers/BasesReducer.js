import { act } from 'react-dom/test-utils';

function BasesReducer(state, action) {
  let newState = [...state];
  switch (action.type) {
    case 'INIT':
      newState = action.payload.data;
      return newState;
    case 'ADD':
      newState = [...state, action.payload.base];
      return newState;
    case 'DELETE':
      newState = newState.filter((item) => item.id != action.payload.base);
      return newState;
    case 'UPDATE':
      return newState;
    case 'ADD_WORD_TO_BASE':
      let findedBaseIndex = newState.findIndex(
        (item) => item.id === action.payload.base.id
      );
      // let edited = { ...newState[findedBaseIndex], words: [] };

      newState.forEach((value, key) => {
        console.log(key);
        if (key === findedBaseIndex) {
          value.words = [...value.words, action.payload.word];
        }
      });
      return newState;

    default:
      throw new Error();
  }
}

export default BasesReducer;
