import { verificar, send } from "./controllers/MailController";
import { database, app } from "./firebase/firebase-config";
import { getDocs, collection, addDoc, getDoc, doc } from 'firebase/firestore'

export default async function handler(req, res) {
    const reclamacionesRef = collection(database, 'reclamaciones');
    if (req.method === 'GET') {
    } else if (req.method === 'POST') {
        if (req.body.action === 'get') {
            console.log(req.body);
            if (!req.body.id) {
                const rec = await getDocs(reclamacionesRef);
                const reclamaciones = rec.docs.map((item) => ({ ...item.data(), id: item.id }))
                const reclamaciones_por_usuario = reclamaciones.filter(r => r.usuario === req.body.user);
                res.json(reclamaciones_por_usuario);
            } else {
                const recRef = doc(database, 'reclamaciones', req.body.id);
                const rec = await getDoc(recRef);
                res.json(rec.data());
            }
        } else {
            const nuevaReclamacion = {
                tipo: 'hipoteca',
                estado: 'satisfactorio',
                fecha: new Date(),
                importe: 1122.34,
                usuario: 'piGSkcINE8kp6SCj3gf0',
                imagen: 'https://lh3.googleusercontent.com/proxy/j2GS_KrhTZ7bgJtRvFfeiB1TsMYMKLr0O42cVsISdWopE_Sd3r-DsDIG6P96IvjmUsBtoMh4EhU4yBuUimXT9CCOmT9DLC1lnBXKyQv5bg-fNRirpPf7QgGtt7H_uTAfR4KFVKhoABpI-Bhs_Irg0YiBUM1w1hbfPPaQBw7DkW4kLHv7SxVW'
            }
            const r = await addDoc(reclamacionesRef, nuevaReclamacion);
            res.status(200).json(r);
            // const mailconfig = {
            //     mailto: "gorkavillara@gmail.com",
            //     subject: "Esto es una prueba",
            //     text: "Hola Gorka esto es una prueba"
            // }
            // const resMail = await send(mailconfig);
            // res.status(200).json(resMail);
        }
    }
}
