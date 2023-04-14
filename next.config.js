/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash:true,
  images:{
    unoptimized:true,
    domains:['storage.googleapis.com'],
  },
}
