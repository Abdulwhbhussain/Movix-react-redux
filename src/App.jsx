import React, { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './redux/homeSlice';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((data) => {
      console.log(data);
      dispatch(getApiConfiguration(data));
    })
  }

  useEffect(() => {
    apiTesting();
  }, [])

  return (
    <div>
      App
      {url?.total_pages}
    </div>
  )
}

export default App
