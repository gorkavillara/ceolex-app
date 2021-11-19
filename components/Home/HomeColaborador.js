const Colaboradores = "https://p1.pxfuel.com/preview/728/55/679/agency-business-business-man-business-meeting.jpg";

const HomeColaborador = () => (
  <div className="home-colaborador">
    <div className="box-colaborador">
      <div className="title">Hazte colaborador</div>
      <div className="desc">
        Si eres abogad@ sácate un extra gestionando las reclamaciones de
        nuestros clientes.
      </div>
      <div className="button">
        <a href="mailto:colaboradores@ceolex.ai">Quiero colaborar</a>
      </div>
      <div className="colaborador-img">
        <img src={Colaboradores} alt="colaborador-img" />
      </div>
    </div>
  </div>
);

export default HomeColaborador;
