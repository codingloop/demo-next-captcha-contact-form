# Contact form API example with captcha

This is a sample project on how to send an email through a contact form. Here `nodemailer` is used to send the email. Only SMTP hosts are available as of now.

### API usage

- Currently only SMTP email hosts are supported in this example
- The API in this example is `/contact` which accepts a post call and the contact can be modified as per the requirement.
- Content can be edited in `contact.js` file

### Required parameters

Following parameters needs to be set in the env file or needs to be added as the environment variable in production environment.

- `SMTP_HOST`
- `SMTP_PORT`
- `FROM_EMAIL_ADDRESS`
- `FROM_EMAIL_PASSWORD`
- `TO_EMAIL_ADDRESS`

### sample contents of env file

In local, the contents of `.env.local` file should be something like below

```
SMTP_HOST=smtp-mail.outlook.com

SMTP_PORT=587

FROM_EMAIL_ADDRESS=sender@outlook.com

FROM_EMAIL_PASSWORD=above_emails_password

TO_EMAIL_ADDRESS=contact_us@email.com
```

### Coming

Captcha exaample is yet to be added
