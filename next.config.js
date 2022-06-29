/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://gndx.dev', //si queremos ponemos / para que vaya al destino o esta otra forma va a un encale externo
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
