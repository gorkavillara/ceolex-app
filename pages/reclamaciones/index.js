import House1 from "../../public/images/house1.jpg";
import House2 from "../../public/images/house2.jpg";
import Reclamacion from "../../components/Reclamaciones/Reclamacion";

const Casa = "https://assets.themortgagereports.com/wp-content/uploads/2020/12/Buy-A-Home-With-Low-No-Down-Payment-First-Time-Home-Buyer.jpg";
const Casa2 = "https://media.istockphoto.com/photos/beautiful-newly-constructed-modern-home-picture-id178505819?k=20&m=178505819&s=170667a&w=0&h=kc69P2CthoGshgtAms351ypHvLKMwXa5g76j1afjQeI=";
const Euskaltel = "https://i.blogs.es/abf022/logo/1366_2000.jpg";

const Reclamaciones = () => (
    <div className="reclamaciones page">
        <div className="reclamaciones-activas">
            <div className="title">
                <h1>Tus Reclamaciones</h1>
            </div>
            <Reclamacion
                img={Casa}
                tipo="Hipoteca"
                estado="documentos"
                fecha="26 jun. 2021"
            />
            <Reclamacion
                img={Casa2}
                tipo="Hipoteca"
                estado="pendiente"
                fecha="16 jun. 2021"
            />
        </div>
        <div className="reclamaciones-pasadas">
            <div className="title">
                <h1>Reclamaciones Pasadas</h1>
            </div>
            <Reclamacion
                img={Euskaltel}
                tipo="Fichero ASNEF"
                estado="exito"
                fecha="8 dic. 2020"
            />
        </div>
    </div>
);

export default Reclamaciones;