import Navbar from './Navbar';
import Episode from '../pages/Episode';
import Podcast from '../pages/Podcast';
import { Route, Routes } from 'react-router-dom';


function App() {
  return ( 
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/episode' element = {<Episode />}/>
        <Route path='/podcast' element = {<Podcast />}/>
      </Routes>
     
      </div></>

  


);
}

export default App;
