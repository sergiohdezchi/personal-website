#!/bin/bash

# Script para preparar los archivos para despliegue en Hostinger

# Colores para mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Preparando el sitio web multilingüe para despliegue en Hostinger ===${NC}"

# Construir la aplicación para producción con los dos idiomas
echo -e "${YELLOW}Construyendo la aplicación...${NC}"
ng build --configuration production

# Verificar si el build fue exitoso
if [ $? -ne 0 ]; then
  echo -e "\n❌ Error en la compilación. Revisa los errores y vuelve a intentar."
  exit 1
fi

echo -e "${GREEN}✅ Compilación completada correctamente${NC}"

# Copiar el archivo .htaccess al directorio de distribución
echo -e "${YELLOW}Copiando el archivo .htaccess al directorio de distribución...${NC}"
cp .htaccess dist/personal-website/browser/

# Copiar la carpeta assets si no se ha copiado automáticamente
if [ ! -d "dist/personal-website/browser/assets" ]; then
  echo -e "${YELLOW}Copiando carpeta de assets...${NC}"
  mkdir -p dist/personal-website/browser/assets
  cp -r src/assets/* dist/personal-website/browser/assets/
fi

# Verificar y crear directorios de idiomas si no existen
echo -e "${YELLOW}Verificando estructura de directorios de idiomas...${NC}"

if [ ! -d "dist/personal-website/browser/es" ]; then
  mkdir -p dist/personal-website/browser/es
  echo -e "${YELLOW}Creado directorio 'es'${NC}"
fi

if [ ! -d "dist/personal-website/browser/en" ]; then
  mkdir -p dist/personal-website/browser/en
  echo -e "${YELLOW}Creado directorio 'en'${NC}"
fi

# Crear archivos index.html de redirección para facilitar la navegación
echo -e "${YELLOW}Creando archivo index.html de redirección en la raíz...${NC}"

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

echo -e "${GREEN}✅ Proceso completado. Los archivos están listos para ser subidos a Hostinger.${NC}"
echo -e "${BLUE}Directorio para subir: ${NC}dist/personal-website/browser/${NC}"
