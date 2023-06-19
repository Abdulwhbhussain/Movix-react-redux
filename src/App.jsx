import React, { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './utils/api';

function App() {

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((data) => {
      console.log(data);
    })
  }

  useEffect(() => {
    apiTesting();
  }, [])

  return (
    <div>
      App
    </div>
  )
}

export default App
