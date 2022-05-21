/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SOCCER_API_HOST: process.env.SOCCER_API_HOST,
    SOCCER_API_KEY: process.env.SOCCER_API_KEY
  }
}
