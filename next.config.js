/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    templateID: process.env.REACT_APP_templateID,
    publicKey: process.env.REACT_APP_publicKey,
  },
};

module.exports = nextConfig;
