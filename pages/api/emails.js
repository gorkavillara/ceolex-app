import { send } from "./controllers/MailController";

export default async function handler(req, res) {
    if (req.method === 'GET') {
    } else if (req.method === 'POST') {
        const mailconfig = {
            from: "Sugerencias Newsletter Impact HUB",
            mailto: "donostia@impacthub.net",
            subject: "¡Nueva sugerencia desde la newsletter!",
            bcc: "gorkavillara@gmail.com",
            text: req.body.sugerencia
        }
        const resMail = await send(mailconfig);
        res.status(200).json(resMail);
    }
}
