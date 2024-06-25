# Email API for Brevo

This project is an **API bridge** to send emails from **forms** with your **Brevo** account.

You are free to use this repository and make your own API to fit with your data.

## How to use

Create a **.env** file in your ./your-email-api and generate your private API key from your Brevo account that you can found [here](https://app.brevo.com/settings/keys/api)  _(brevo.com/settings/keys/api)_.

Then put your key and this code in the .env file :

```
NITRO_BREVO_SECRET="your_private_key"
```

Don't forget to change the variables in the ./server/routes/index.post.ts file if you want to fit perfectly with your needs and replace email and name with yours.

## Stack

`Nitro` `Zod`

## Resources
https://nitro.unjs.io/guide
https://github.com/getbrevo/brevo-node
https://zod.dev/
