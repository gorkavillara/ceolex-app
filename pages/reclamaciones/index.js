import Reclamacion from "../../components/Reclamaciones/Reclamacion";
import { useEffect, useState } from "react";
import axios from "axios";
import { toDate } from 'firebase/firestore';

const Casa = "https://assets.themortgagereports.com/wp-content/uploads/2020/12/Buy-A-Home-With-Low-No-Down-Payment-First-Time-Home-Buyer.jpg";
const Casa2 = "https://media.istockphoto.com/photos/beautiful-newly-constructed-modern-home-picture-id178505819?k=20&m=178505819&s=170667a&w=0&h=kc69P2CthoGshgtAms351ypHvLKMwXa5g76j1afjQeI=";
const Euskaltel = "https://i.blogs.es/abf022/logo/1366_2000.jpg";

const Reclamaciones = () => {
    const [reclamaciones, setReclamaciones] = useState([]);
    const reclamacionesActivas = reclamaciones.filter(r => r.estado === "pendiente" || r.estado === "documentos");
    const reclamacionesFinalizadas = reclamaciones.filter(r => r.estado !== "pendiente" && r.estado !== "documentos");
    useEffect(async () => {
        const rec = await axios.post('/api/reclamaciones', { action: 'get', user: "piGSkcINE8kp6SCj3gf0" });
        console.log(rec.data);
        setReclamaciones(rec.data);
    }, [])
    return (
        <div className="reclamaciones page">
            <div className="reclamaciones-activas">
                <div className="title">
                    <h1>Tus Reclamaciones</h1>
                </div>
                {reclamacionesActivas.map((reclamacion, i) => {
                    const fecha = new Date(reclamacion.fecha.seconds * 1000);
                    return <Reclamacion
                        id={reclamacion.id}
                        key={i}
                        img={reclamacion.imagen}
                        tipo={reclamacion.tipo}
                        estado={reclamacion.estado}
                        fecha={fecha.toLocaleDateString()}
                    />
                })}
            </div>
            <div className="reclamaciones-pasadas">
                <div className="title">
                    <h1>Reclamaciones Pasadas</h1>
                </div>
                {reclamacionesFinalizadas.map((reclamacion, i) => {
                    const fecha = new Date(reclamacion.fecha.seconds * 1000);
                    return <Reclamacion
                        id={reclamacion.id}
                        key={i}
                        img={reclamacion.imagen}
                        tipo={reclamacion.tipo}
                        estado={reclamacion.estado}
                        fecha={fecha.toLocaleDateString()}
                    />
                })}
            </div>
        </div>
    );
}

export default Reclamaciones;