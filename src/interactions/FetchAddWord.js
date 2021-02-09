import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Token ${localStorage.getItem('token')}`,
};

const FetchAddWord = async ({ data, base, dispatch }) => {
  const response = axios
    .put(`http://127.0.0.1:8000/wordlist/base/${base.id}/`, data, {
      headers,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });

  return response;
};
export default FetchAddWord;
