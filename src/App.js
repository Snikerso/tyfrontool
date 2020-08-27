import React from 'react';
import {useQuery} from 'react-query';
import './App.css'; 

function App() {

  const {data,isLoading} = useQuery('data' , () =>(
    fetch('http://127.0.0.1:8000/announcements/announcements/',{
      method:'GET'
    })
    .then(res =>res.json())
  ))
    console.log(data)

    if (isLoading) return "Loading...";

  return (
    <div >
      {data.map( item => <div>{item.title}</div>)}
    </div>
  );
}

export default App;
