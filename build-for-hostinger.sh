#!/bin/bash

# Script para construir el sitio web y prepararlo para subir a Hostinger

# Colores para mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Construyendo sitio web multilingüe para Hostinger ===${NC}"

# Extraer mensajes de traducción actualizados
echo -e "${YELLOW}Extrayendo mensajes de traducción...${NC}"
ng extract-i18n --output-path src/locale

# Verificar si la extracción fue exitosa
if [ $? -ne 0 ]; then
  echo -e "\n❌ Error en la extracción de mensajes. Revisa los errores y vuelve a intentar."
  exit 1
fi

echo -e "${GREEN}✅ Extracción de mensajes completada${NC}"

# Construir la aplicación para producción con ambos idiomas
echo -e "${YELLOW}Construyendo la aplicación para producción...${NC}"
ng build --configuration production

# Verificar si el build fue exitoso
if [ $? -ne 0 ]; then
  echo -e "\n❌ Error en la compilación. Revisa los errores y vuelve a intentar."
  exit 1
fi

echo -e "${GREEN}✅ Compilación completada correctamente${NC}"

# Copiar archivos necesarios al directorio de distribución
echo -e "${YELLOW}Copiando archivos adicionales al directorio de distribución...${NC}"

# .htaccess
cp .htaccess dist/personal-website/browser/

# Añadir robots.txt
cat > dist/personal-website/browser/robots.txt << EOF
# Allow all robots
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://sergiohernandez.dev/sitemap.xml
EOF

# Crear un sitemap.xml básico
cat > dist/personal-website/browser/sitemap.xml << EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://sergiohernandez.dev/es/</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://sergiohernandez.dev/en/</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sergiohernandez.dev/es/about</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://sergiohernandez.dev/en/about</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://sergiohernandez.dev/es/skills</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://sergiohernandez.dev/en/skills</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://sergiohernandez.dev/es/contact</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>0.70</priority>
  </url>
  <url>
    <loc>https://sergiohernandez.dev/en/contact</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <priority>0.70</priority>
  </url>
</urlset>
EOF

# Crear un index.html básico en la raíz para redirección según el idioma
cat > dist/personal-website/browser/index.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Sergio Hernández | Developer</title>
  <script>
    // Detectar el idioma preferido del navegador
    const userLang = navigator.language || navigator.userLanguage;
    const supportedLangs = ['es', 'en'];
    
    // Extraer el código de idioma principal
    const langCode = userLang.split('-')[0].toLowerCase();
    
    // Verificar si el idioma es soportado, si no usar español por defecto
    const targetLang = supportedLangs.includes(langCode) ? langCode : 'es';
    
    // Redirigir a la versión correspondiente
    window.location.replace('/' + targetLang + '/');
  </script>
  <meta http-equiv="refresh" content="0;URL='/es/'" />
</head>
<body>
  <p>Redirigiendo...</p>
</body>
</html>
EOF

echo -e "${GREEN}✅ Archivos adicionales copiados correctamente${NC}"
echo -e "${BLUE}=== Construcción finalizada ===${NC}"
echo -e "Los archivos están listos para ser subidos a Hostinger en: ${YELLOW}dist/personal-website/browser/${NC}"
echo -e "${GREEN}Recuerda configurar Hostinger para que todos los caminos redireccionen al index.html del idioma correspondiente${NC}"
