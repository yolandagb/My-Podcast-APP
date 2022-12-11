
// import React, { useEffect, useState } from "react";
// import { Button } from "reactstrap";
import Navbar from './Navbar';
// import { Link } from "react-router-dom";
import Episode from '../pages/Episode';
import Podcast from '../pages/Podcast';
import { Route, Routes } from 'react-router-dom';
import GeneralCard from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const[ people, fetchPeople] = useState ([])
  // const getData = () => {
  //     fetch('https://swapi.dev/api/people/')
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res)
  //         fetchPeople(res)
  //       })
  //   }
  //   useEffect(() => {
  //     getData()
  //   }, [])




  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
        <Route path='/episode' element = {<Episode />}/>
        <Route path='/podcast' element = {<Podcast />}/>
      </Routes>
      </div>
      <div className='container-fluid'>
        <GeneralCard></GeneralCard>


      </div>
      







    </>
  );
}
export default App;
