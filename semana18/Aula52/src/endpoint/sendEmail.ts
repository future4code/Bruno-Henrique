import { Request, Response } from "express";
import transporter from "../services/transporter";

export async function sendEmail(req: Request, res: Response): Promise<void> {
    try {

        const { email } = req.body

        if (!email) {
            throw new Error("informe a conta de email");
        }

        const info = await transporter.sendMail({
            from: `Bruno Silva <${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Desafio Aula52",
            text: "Envio de email pelo NodeMailer",
            html: `
               <h2>Aula 52 - Serviços no Backend</h2>
               <p>Na atividade da aula sobre <b>Serviços no Backend</b> além da verifição do cep, criamos uma nova tabela para adicionar o endereço e vimos como enviar email usando a biblioteca NodeMailer para reset de senha.</p>
               <button type="button">Click Me!</button>
               <h4>ps.: Utilizei as tags h2, p e button(O botão não funciona :D)</h4>
            `
        })

        res.status(200).send("Sucesso")

    } catch (error) {
        res.status(500).send("Internal server error")
    }

}