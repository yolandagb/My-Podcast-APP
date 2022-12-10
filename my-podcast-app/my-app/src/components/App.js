
import React, { useEffect, useState } from "react";

import Navbar from './Navbar';
import { Link } from "react-router-dom";
// import Episode from '../pages/Episode';
// import Podcast from '../pages/Podcast';
// import { Route, Routes } from 'react-router-dom';
import Card from './Card';

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
        {/* <Routes>
        <Route path='/episode' element = {<Episode />}/>
        <Route path='/podcast' element = {<Podcast />}/>
      </Routes> */}
      </div>
      <div className="container-card d-flex">
       
          return (<Card>
            <p className="card-text">
              <strong>Titulo:</strong> 
            </p>
            <p className="card-text">
              <strong>Autor:</strong> 
            </p>
            <Link to="/episode" className="link_to">
              <button id="btnLearnmore">Learn more</button>
            </Link>{" "}

          </Card>
          );
      </div>








    </>
  );
}
export default App;
