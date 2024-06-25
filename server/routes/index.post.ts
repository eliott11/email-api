import {TransactionalEmailsApi, SendSmtpEmail, TransactionalEmailsApiApiKeys} from "@getbrevo/brevo"
import z from "zod"

const brevoSecret = useRuntimeConfig().brevoSecret;

let apiInstance = new TransactionalEmailsApi();
const apiKey = apiInstance.setApiKey(
  TransactionalEmailsApiApiKeys.apiKey,
  brevoSecret,
);

export default eventHandler(async(event) => {
  const didHandleCors = handleCors(event, {
    origin: '*',
    preflight: {
      statusCode: 204,
    },
    methods: '*',
  });
  if (didHandleCors) {
    return;
  }
  const {subject, content, from} = await readValidatedBody(event, (data: any) => (z.object({
    subject: z.string(),
    content: z.string(),
    from: z.object({
      name: z.string(), 
      email: z.string().email()
    })
    
  }).parse(data)));

  let sendSmtpEmail = new SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = content;
  sendSmtpEmail.sender = { "email": "eliottdemont@gmail.com", "name": "Eliott" };
  sendSmtpEmail.to = [
    { "email": "eliottdemont@gmail.com", "name": "Eliott" }
  ];
  sendSmtpEmail.replyTo = from;

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail)
    return data
  } catch (error:any) {
    console.log(error)
    return error.body
  }
});
