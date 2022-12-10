import Navbar from './Navbar';
import Episode from '../pages/Episode';
import Podcast from '../pages/Podcast';
import { Route, Routes } from 'react-router-dom';
import Card from './Card';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/episode' element={<Episode />} />
          <Route path='/podcast' element={<Podcast />} />
        </Routes>
      </div>
      <div className="container-card d-flex">
        <Card
          title="Nombre"
          text="Autor"
          botton="Find Out More!"
          urlImg="https://www.arqhys.com/top-10-escritorios-de-oficina.html"

        />
      </div>
    </>




  );
}

export default App;
