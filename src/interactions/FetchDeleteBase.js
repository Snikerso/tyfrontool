import React, { useContext } from 'react';
import { ActualBaseContext } from '../../contexts/ActualBaseContext';
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Token ${localStorage.getItem('token')}`,
};
const FetchAddWord = ({ data, base, dispatch }) => {
  axios
    .put(`http://127.0.0.1:8000/wordlist/base/${base.id}/`, data, {
      headers,
    })
    .then((res) => {
      console.log(res);
      if (res.statusText == 'OK') {
        dispatch({
          type: 'ADD_WORD',
          payload: { word: res.data.words[data.words.length - 1] },
        });
        console.log(res.data);
      }
    });
};
export default FetchAddWord;
