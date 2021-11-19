import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "mail.gorkavillar.com",
    port: 465,
    secure: true,
    auth: {
        user: "soporte@gorkavillar.com",
        pass: "#Gu1630830U01?",
    }
})

const send = async ({ mailto, subject, text }) => {
    const res = await transport.sendMail({
        from: "soporte@gorkavillar.com",
        to: mailto,
        subject,
        text,
        html: `<p>${text}</p>`
    });
    return res;
}

const verificar = async () => {
    const res = await transport.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    return res;
}

export { send, verificar }