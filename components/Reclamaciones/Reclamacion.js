import { IoCaretForward } from "react-icons/io5"
import Link from "next/link"

const Reclamacion = ({ id, img, tipo, estado, fecha }) => {
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
    case "denegado":
      texto_estado = "Estado: Caso denegado";
      break;
    default:
      texto_estado = estado;
      break;
  }
  return (
    <Link href={`/reclamaciones/${id}`}>
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
    </Link>
  );
};

export default Reclamacion;
