import { send } from "./controllers/MailController";

export default async function handler(req, res) {
    if (req.method === 'GET') {
    } else if (req.method === 'POST') {
        const mailconfig = {
            mailto: "gorkavillara@gmail.com",
            subject: "Esto es una prueba",
            text: "Hola Gorka esto es una prueba desde mailchimp"
        }
        const resMail = await send(mailconfig);
        res.status(200).json(resMail);
    }
}
