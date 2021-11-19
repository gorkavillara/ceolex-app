import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';

const RecId = () => {
    const router = useRouter();
    const { id } = router.query;
    const [reclamacion, setReclamacion] = useState(null);
    useEffect(async () => {
        const rec = await axios.post('/api/reclamaciones', { action: 'get', id, usuario: 'afawefwaee' });
        console.log(rec.data);
        setReclamacion(rec.data);
    }, [])
    return (
        <div>
            <h1>Esta es la reclamación {id}</h1>
            <p>Los datos son</p>
            {reclamacion && <ul>
                <li>Id: {id}</li>
                <li>Estado: {reclamacion.estado}</li>
                <li>Importe: {reclamacion.importe}</li>
            </ul>}
        </div>
    )
}

export default RecId
