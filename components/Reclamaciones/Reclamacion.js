import { IoCaretForward } from "react-icons/io5"

const Reclamacion = ({ img, tipo, estado, fecha }) => {
  let texto_estado = "";
  switch (estado) {
    case "documentos":
      texto_estado = "Estado: Faltan documentos";
      break;
    case "pendiente":
      texto_estado = "Estado: Pendiente de resolución";
      break;
    case "exito":
      texto_estado = "Estado: Resuelto con éxito";
      break;
    default:
      texto_estado = estado;
      break;
  }
  return (
    <div className="reclamacion-activa">
      <div className="reclamacion-image">
        <img src={img} alt="rec-1" />
      </div>
      <div className="reclamacion-text">
        <div className="reclamacion-text-titulo">{tipo}</div>
        <div className={`reclamacion-text-estado estado-${estado}`}>
          {texto_estado}
        </div>
        <div className="reclamacion-text-fecha">{fecha}</div>
      </div>
      <div className="reclamacion-caret">
        <IoCaretForward />
      </div>
    </div>
  );
};

export default Reclamacion;
