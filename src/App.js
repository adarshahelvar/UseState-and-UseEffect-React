import './App.css';
import React,{useState,useEffect} from 'react';
import {data} from './data';

const url = 'https://api.github.com/users';

function App() {
  const [gusers, setGusers] = useState([]);
  async function getData() {
    const response =  await fetch(url);
    const users = await response.json();
    setGusers(users);
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <>
    {gusers.map((gusers)=>{
      return (
        <li>{gusers.login}</li>
      )
    })}
    </>
  );
}

export default App;
