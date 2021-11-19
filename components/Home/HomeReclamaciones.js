import HorizScrollerItem from "./HorizScrollerItem";
const Airport = "images/Airport.png";
const Hipoteca = "images/Hipoteca.png";
const Tarjeta = "images/tarjeta.png";
const Stop = "images/stop.png";

const HomeReclamaciones = () => (
  <div className="home-reclamaciones">
    <div className="section-h3">
      <h3>Descubre tus opciones con nosotros</h3>
    </div>
    <div className="horiz-scroller">
      <HorizScrollerItem
        img={Hipoteca}
        title="Hipoteca"
        desc="Gastos de escritura"
      />
      <HorizScrollerItem img={Airport} title="Vuelos" desc="Maleta Perdida" />
      <HorizScrollerItem
        img={Stop}
        title="Fichero ASNEF"
        desc="Morosidad"
      />
      <HorizScrollerItem
        img={Tarjeta}
        title="Tarjeta Revolving"
        desc="Intereses"
      />
    </div>
  </div>
);

export default HomeReclamaciones;
