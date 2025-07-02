# Sitio Web Personal Multilingüe

Este proyecto es un sitio web personal desarrollado en Angular 19 con soporte para múltiples idiomas (español e inglés) y preparado para ser desplegado como un sitio estático en Hostinger.

## Características

- Componentes Standalone de Angular 19
- Soporte multilingüe (español e inglés)
- Diseño moderno y responsivo con SCSS
- Animaciones y efectos visuales
- Optimizado para SEO
- Configuración para despliegue estático en Hostinger

## Estructura del Proyecto

El proyecto sigue la estructura estándar de Angular con algunas particularidades para la internacionalización:

```
/
├── src/
│   ├── app/
│   │   ├── components/        # Componentes compartidos (header, footer)
│   │   ├── pages/             # Componentes de páginas (home, about, skills, etc.)
│   │   ├── shared/            # Componentes y servicios compartidos
│   │   ├── app.component.ts   # Componente raíz
│   │   └── app.routes.ts      # Configuración de rutas
│   ├── locale/                # Archivos de traducción
│   │   ├── messages.xlf       # Archivo base de mensajes
│   │   ├── messages.es.xlf    # Traducción al español
│   │   └── messages.en.xlf    # Traducción al inglés
│   └── assets/                # Recursos estáticos (imágenes, fuentes, etc.)
├── .htaccess                  # Configuración para servidor Apache (Hostinger)
├── angular.json               # Configuración del proyecto Angular
└── build-for-hostinger.sh     # Script para preparar el proyecto para Hostinger
```

## Configuración de Internacionalización

El proyecto está configurado para generar versiones estáticas del sitio en español e inglés. La configuración principal se encuentra en:

- **angular.json**: Configuración para generar versiones localizadas
- **src/locale/**: Archivos de traducción
- **scripts de construcción**: Para generar los archivos estáticos

## Desarrollo Local

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm start
```

El sitio estará disponible en `http://localhost:4200/`.

## Cómo añadir más textos traducibles

1. Marca los textos a traducir en tus componentes usando la directiva `i18n`:

```html
<p i18n="@@text.description">Este texto será traducido</p>
```

2. Extrae los mensajes para traducción:
```bash
ng extract-i18n --output-path src/locale
```

3. Actualiza los archivos de traducción (`messages.es.xlf` y `messages.en.xlf`) con las nuevas traducciones.

## Construcción para producción

Para construir el proyecto para producción con ambos idiomas:

```bash
./build-for-hostinger.sh
```

Esto generará una carpeta `dist/personal-website/browser/` con la siguiente estructura:

```
browser/
├── es/                 # Versión en español
├── en/                 # Versión en inglés
├── assets/             # Recursos compartidos
├── .htaccess           # Configuración del servidor
├── index.html          # Redirección según el idioma del navegador
├── robots.txt          # Configuración para motores de búsqueda
└── sitemap.xml         # Mapa del sitio para SEO
```

## Despliegue en Hostinger

1. Sube todos los archivos de la carpeta `dist/personal-website/browser/` a la carpeta raíz de tu hosting.

2. Asegúrate de que la opción de redirección de errores 404 esté configurada para redirigir a `index.html`.

3. Verifica que el archivo `.htaccess` se haya subido correctamente y tenga los permisos adecuados.

## SEO y Metadatos

Para mejorar el SEO, el sitio incluye:

- Un archivo `sitemap.xml` generado automáticamente
- Un archivo `robots.txt` para indicar a los motores de búsqueda qué páginas indexar
- Configuración de encabezados HTTP en `.htaccess`

## Nota sobre las traducciones

Para continuar añadiendo más traducciones, asegúrate de:

1. Marcar todos los textos visibles con la directiva `i18n`
2. Ejecutar el comando de extracción cada vez que añadas nuevos textos
3. Actualizar manualmente los archivos de traducción con las nuevas entradas

---
© Sergio Hernández - 2025
