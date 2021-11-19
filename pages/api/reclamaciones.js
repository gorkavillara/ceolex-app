import { verificar, send } from "./controllers/MailController";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ name: 'John Doe' })
    } else if (req.method === 'POST') {
        const mailconfig = {
            mailto: "gorkavillara@gmail.com",
            subject: "Esto es una prueba",
            text: "Hola Gorka esto es una prueba"
        }
        const resMail = await send(mailconfig);
        res.status(200).json(resMail);
    }
}
