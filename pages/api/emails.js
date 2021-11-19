import { send } from "./controllers/MailController";

export default async function handler(req, res) {
    if (req.method === 'GET') {
    } else if (req.method === 'POST') {
        const mailconfig = {
            from: "Sugerencias Newsletter Impact HUB",
            mailto: "gorkavillara@gmail.com",
            subject: "¡Nueva sugerencia desde la newsletter!",
            text: req.body.sugerencia
        }
        const resMail = await send(mailconfig);
        res.status(200).json(resMail);
    }
}
