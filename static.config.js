/*
  Configuración para servir un sitio estático multilenguaje
  Este archivo maneja las redirecciones y especifica la configuración del servidor
*/

// Redirecciones basadas en el idioma del navegador
const supportedLocales = ['en', 'es'];
const defaultLocale = 'es';

// Crea el directorio .well-known necesario para ciertos servicios
const path = require('path');
const fs = require('fs');

// Verifica y crea el directorio .well-known si no existe
const wellKnownDir = path.join(__dirname, '.well-known');
if (!fs.existsSync(wellKnownDir)){
    fs.mkdirSync(wellKnownDir, { recursive: true });
}

// Exporta la configuración para servidores static como Hostinger
module.exports = {
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ],
  redirects: [
    // Redirecciona la raíz al idioma preferido o al predeterminado
    {
      source: '/',
      destination: '/es/',
      permanent: false
    }
  ]
};
