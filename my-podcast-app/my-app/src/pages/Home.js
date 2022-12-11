// import React, { useEffect, useState } from "react";
// import { Button } from "reactstrap";
import Navbar from "../components/Navbar";
import Episode from '../pages/Episode';
import Podcast from '../pages/Podcast';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SearchBar from '../components/Seach';
// import GeneralCard from '../components/Card';

function Home() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
        <Route path='/episode' element = {<Episode />}/>
        <Route path='/podcast' element = {<Podcast />}/>
      </Routes>
      </div>
      {/* <div className='container-fluid'>
        <SearchBar></SearchBar>
        <br></br>
        <GeneralCard></GeneralCard>
      </div> */}
    </>
  );
}
export default Home;