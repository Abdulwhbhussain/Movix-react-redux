import React, { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './utils/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    fetchDataFromApi('/configuration').then((data) => {
      console.log(data);
      const url = {
        backdrop: data.images.secure_base_url + "original",
        poster: data.images.secure_base_url + "original",
        profile: data.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    })
  }

  useEffect(() => {
    apiTesting();
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
