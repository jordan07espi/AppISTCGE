# Aplicación CGE (Ionic)

Aplicación móvil desarrollada con Ionic y Angular para centralizar el acceso a los recursos web y servicios principales del **Instituto CGE**, **Capacitadora CGE** y **Fundación CGE**.

## Captura de Pantalla

*(Aquí deberías añadir la captura de pantalla. Primero, sube el archivo `image_2a20b2.jpg` a tu repositorio, por ejemplo, en una carpeta llamada `screenshots`. Luego, ajusta la ruta en la línea de abajo)*

![Captura de la App CGE](screenshots/image_2a20b2.jpg)

## Características Principales

* **Navegación por Pestañas:** Acceso rápido a las secciones:
    * Instituto CGE
    * Capacitadora CGE
    * Fundación CGE
    * Recursos Adicionales (Radio, Biblia)
* **Accesos Directos:** Enlaces directos a plataformas clave como SGA, Correo Institucional, Campus Virtual, EVA, Biblioteca Virtual, Office 365, Contactos, Denuncias, etc.
* **Contacto Rápido:** Botón flotante (FAB) en todas las secciones para iniciar una conversación de WhatsApp con un mensaje predefinido.
* **Tecnología Moderna:** Desarrollada con Ionic y Angular, asegurando una experiencia de usuario fluida.
* **Multiplataforma:** Construida para funcionar en la web, Android e iOS usando Capacitor.
* **Interfaz Adaptable:** Diseño responsivo que se adapta a diferentes tamaños de pantalla y respeta las áreas seguras (Safe Areas) del dispositivo.

## Tecnologías Utilizadas

* [Ionic Framework](https://ionicframework.com/) (v6+/v7+)
* [Angular](https://angular.io/) (v14+)
* [Capacitor](https://capacitorjs.com/) (v4+)
    * Plugin `@capacitor/browser`
* [TypeScript](https://www.typescriptlang.org/)
* [SCSS](https://sass-lang.com/)

## Instalación y Ejecución Local

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DE_TU_REPOSITORIO_EN_GITHUB>
    cd <NOMBRE_DE_LA_CARPETA_DEL_PROYECTO>
    ```

2.  **Instala las dependencias:**
    (Asegúrate de tener Node.js y npm instalados)
    ```bash
    npm install
    ```

3.  **Ejecuta en el navegador (Desarrollo):**
    Esto iniciará un servidor local y abrirá la aplicación en tu navegador. La aplicación se recargará automáticamente si haces cambios en el código.
    ```bash
    ionic serve
    ```

4.  **Construcción y Ejecución Nativa (Android/iOS):**

    * **Construye el proyecto web:**
        ```bash
        ionic build
        ```
    * **Añade las plataformas (si es la primera vez):**
        ```bash
        npx cap add android
        npx cap add ios
        # Si Capacitor no está inicializado, ejecuta: npx cap init [NombreApp] [IDApp]
        ```
    * **Copia los assets web a las plataformas nativas:**
        ```bash
        npx cap copy
        ```
    * **Abre el proyecto en el IDE nativo:**
        ```bash
        npx cap open android  # Abrirá en Android Studio
        npx cap open ios      # Abrirá en Xcode
        ```
    * Desde el IDE nativo (Android Studio o Xcode), puedes ejecutar la aplicación en un emulador o dispositivo físico.

## Uso

1.  Inicia la aplicación.
2.  Navega entre las diferentes secciones (Instituto, Capacitadora, Fundación, Recursos) usando la barra de pestañas inferior.
3.  Dentro de cada sección, haz clic en un elemento de la lista para abrir el recurso web asociado en el navegador predeterminado de tu dispositivo.
4.  Utiliza el botón flotante verde de WhatsApp en la esquina inferior derecha para contactar directamente con CGE.

---

*Creado por [Tu Nombre o Nombre del Equipo]*
*Fecha: [Puedes poner la fecha actual, por ejemplo: Abril 2025]*
