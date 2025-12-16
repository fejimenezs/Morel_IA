Morel IA

Morel IA es una aplicación de gestión de pacientes que utiliza inteligencia artificial para realizar análisis de sesiones, con un backend en NestJS y un frontend en React.

Descripción

Este proyecto tiene como objetivo crear una plataforma para gestionar información de pacientes, sesiones y análisis mediante una interfaz web, con la capacidad de interactuar con un backend basado en NestJS y un frontend en React. Los análisis de sesiones se realizan con inteligencia artificial, utilizando datos de pacientes para generar informes sobre su estado.

Características

Gestión de pacientes: Crear, editar, listar y eliminar pacientes.

Gestión de sesiones: Crear, ver y actualizar el estado de las sesiones de los pacientes.

Análisis IA: Generación de análisis de sesiones usando IA.

Autenticación: Inicio de sesión para médicos y profesionales con JWT.

Interfaz de usuario: Interfaz intuitiva y moderna hecha con React.

Tecnologías
Backend

NestJS: Framework para Node.js que ayuda a construir aplicaciones escalables y mantenibles.

TypeORM: ORM para TypeScript y JavaScript, utilizado para gestionar la base de datos.

PostgreSQL: Sistema de gestión de bases de datos relacional.

JWT: Autenticación mediante tokens.

Frontend

React: Librería para construir interfaces de usuario.

Axios: Librería para hacer peticiones HTTP desde el frontend.

Bootstrap: Framework CSS para diseño responsivo.

Vite: Herramienta de construcción para React.

Requisitos
Backend

Node.js (v16 o superior)

PostgreSQL

Frontend

Node.js (v16 o superior)

Vite

Instalación
Backend

Clona el repositorio:

git clone https://github.com/fejimenezs/Morel_IA.git
cd backend

Instala las dependencias:

npm install

Configura la base de datos en src/config/database.config.ts con los datos correctos de tu base de datos de PostgreSQL.

Ejecuta las migraciones (si es necesario):

npm run build

Inicia el servidor:

npm run start:prod

Frontend

Clona el repositorio:

git clone https://github.com/fejimenezs/Morel_IA.git
cd frontend

Instala las dependencias:

npm install

Configura la URL base de la API en el archivo src/api.ts o src/axios.ts dependiendo de tu configuración:

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Cambia a la URL de tu backend en producción
});

Inicia el servidor de desarrollo:

npm run dev

Abre la aplicación en tu navegador en http://localhost:5173.

Uso

Autenticación: Inicia sesión con las credenciales proporcionadas para acceder a la plataforma.

Gestión de pacientes: Añade, edita y visualiza la información de los pacientes.

Sesiones de pacientes: Registra y actualiza las sesiones realizadas con los pacientes.

Análisis IA: Genera análisis de sesiones utilizando la inteligencia artificial.

Despliegue en Producción

Backend: Utiliza un servicio de hosting como Render o Heroku para desplegar el backend de NestJS.

Frontend: Puedes desplegar el frontend utilizando servicios como Vercel, Netlify, o en la misma plataforma que el backend.

Estructura de Directorios
/backend
  /src
    /appointments
    /auth
    /patients
    /sessions
    /session-analysis
    /users
    /config
    main.ts
  package.json
  tsconfig.json
/frontend
  /public
  /src
    /assets
    /components
    /pages
    /services
    /App.tsx
    index.tsx
  package.json
  vite.config.ts

Contribuciones
