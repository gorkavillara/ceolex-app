import { IoSearch } from 'react-icons/io5'
import axios from "axios"

const HomeHero = () => {
  const busquedaFlexible = () => {
    axios.post('/api/reclamaciones', { busqueda: "flexible" })
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }
  return (
    <div className="home-hero">
      <div className="search">
        <div className="search-bar">
          <IoSearch />
          <span>¿Qué quieres reclamar?</span>
        </div>
      </div>
      <div className="main">
        <div className="main-text">
          ¿No tienes claro qué puedes reclamar?
          <br />
          Nosotros te guiamos
        </div>
        <button onClick={busquedaFlexible} className="main-button">
          <span>Búsqueda flexible</span>
        </button>
      </div>
    </div>
  );
}

export default HomeHero;
