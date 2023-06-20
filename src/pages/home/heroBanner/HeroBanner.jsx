import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { backdrop, poster, profile } = useSelector((state) => state.home.url);
  const { data, loading, error } = useFetch('/movie/upcoming');

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    console.log(search);
  }

  const searchResult = (e) => {
    if (e.key === 'Enter' && search !== '') {
      navigate(`/search/${search}`);
    }
  }

  useEffect(() => {
    if (data) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomMovie = data.results[randomIndex];
      const randomBackdropPic = randomMovie.backdrop_path;
      const randomBackdrop = backdrop + randomBackdropPic;
      setBackground(randomBackdrop);
    }
  }, [data])

  return (
    <div className="heroBanner">
      {
        !loading &&
        <div className="backdrop-img">
        <Img src={background} />
        </div>
      }

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movie, TV shows to discover, Explore now.</span>
          <div className="searchInput">
            <input type="text" onChange={handleSearch} onKeyUp={searchResult} placeholder="Search for Movies and TV shows" />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner