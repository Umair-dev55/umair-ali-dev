import os from 'os';

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return null;
}

const localIp = getLocalIp();
const allowedOrigins = ['localhost:3000'];
if (localIp) {
  allowedOrigins.push(`${localIp}:3000`);
  allowedOrigins.push(`${localIp}:3001`);
  allowedOrigins.push(`${localIp}:3002`);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      allowedOrigins: allowedOrigins,
    },
  },
};

export default nextConfig;
