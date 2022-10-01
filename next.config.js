/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    FROM_EMAIL_ADDRESS: process.env.FROM_EMAIL_ADDRESS,
    FROM_EMAIL_PASSWORD: process.env.FROM_EMAIL_PASSWORD,
    TO_EMAIL_ADDRESS: process.env.TO_EMAIL_ADDRESS,
  },
};
