# 🧠 Morel IA: Plataforma de Gestión de Pacientes con Análisis de IA

Morel IA es una aplicación completa diseñada para la **gestión de pacientes** y el **análisis de sesiones** utilizando la **Inteligencia Artificial (IA)**. Proporciona una interfaz web para profesionales de la salud, permitiendo un manejo eficiente de la información clínica y la generación de informes detallados basados en datos de las sesiones.

## 📝 Descripción del Proyecto

El objetivo principal de Morel IA es ofrecer una plataforma robusta y escalable para la administración de datos de pacientes y sesiones. La característica clave es la capacidad de realizar **análisis automatizados de sesiones** mediante IA, lo que facilita a los médicos y profesionales la obtención de *insights* sobre el estado y el progreso de sus pacientes.

La aplicación consta de un **backend** potente desarrollado con **NestJS** y un **frontend** moderno e intuitivo creado con **React**.

## ✨ Características Principales

* **Gestión de Pacientes:** Funcionalidades CRUD completas (Crear, Editar, Listar, Eliminar) para administrar la información de los pacientes.
* **Gestión de Sesiones:** Registro, visualización y actualización del estado de las sesiones terapéuticas de cada paciente.
* **Análisis IA:** Generación de informes y análisis detallados de las sesiones utilizando algoritmos de Inteligencia Artificial.
* **Autenticación Segura:** Implementación de inicio de sesión para médicos y profesionales utilizando **JWT (JSON Web Tokens)**.
* **Interfaz de Usuario:** Interfaz de usuario (**UI**) moderna, responsiva e intuitiva desarrollada con React y Bootstrap.

## 🛠️ Tecnologías Utilizadas

### Backend (NestJS)

| Tecnología | Descripción |
| :--- | :--- |
| **NestJS** | Framework progresivo de Node.js para construir aplicaciones empresariales y escalables. |
| **TypeORM** | ORM (Object-Relational Mapper) utilizado para gestionar la base de datos de manera eficiente. |
| **PostgreSQL** | Sistema de gestión de bases de datos relacional robusto y de código abierto. |
| **JWT** | Estándar para la autenticación y el intercambio seguro de información. |

### Frontend (React)

| Tecnología | Descripción |
| :--- | :--- |
| **React** | Librería de JavaScript para la construcción de interfaces de usuario. |
| **Axios** | Cliente HTTP basado en promesas para realizar peticiones al backend. |
| **Bootstrap** | Framework CSS para un diseño *responsive* rápido y estandarizado. |
| **Vite** | Herramienta de construcción moderna y rápida para proyectos de React. |

## ⚙️ Requisitos

Asegúrate de tener instalados los siguientes requisitos en tu entorno de desarrollo:

### Backend y Frontend
* **Node.js** (versión v16 o superior)

### Backend
* **PostgreSQL** (Servidor de base de datos en ejecución)

### Frontend
* **Vite**

## 🚀 Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto:

### 1. Clonar el Repositorio


git clone [https://github.com/fejimenezs/Morel_IA.git](https://github.com/fejimenezs/Morel_IA.git)
2. Configuración del Backend


cd Morel_IA/backend
npm install
⚠️ Configuración de la Base de Datos

Configura las credenciales de tu base de datos PostgreSQL en el archivo src/config/database.config.ts.

Asegúrate de que tu servidor PostgreSQL esté corriendo.

Bash

# Opcional: Ejecutar migraciones (si tienes definidas)
npm run build

# Iniciar el servidor en modo producción (o usa 'npm run start:dev' para desarrollo)
npm run start:prod
El backend se ejecutará por defecto en http://localhost:3000.

3. Configuración del Frontend
Bash

cd ../frontend
npm install
⚠️ Configuración de la API

Configura la URL base de tu backend en el archivo de configuración de la API (generalmente src/api.ts o src/axios.ts):

JavaScript

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Ajusta si tu backend se ejecuta en otro puerto o dominio
});
Bash

# Iniciar el servidor de desarrollo del frontend
npm run dev
Abre la aplicación en tu navegador en http://localhost:5173.

💻 Uso de la Aplicación
Autenticación: Accede a la plataforma utilizando tus credenciales de médico/profesional.

Gestión de Pacientes: Utiliza la interfaz para añadir nuevos pacientes, editar su historial o visualizar su información.

Sesiones: Registra cada sesión realizada y actualiza su estado.

Análisis IA: Accede a la funcionalidad de análisis de sesión para generar informes potenciados por inteligencia artificial.

☁️ Despliegue en Producción
Backend (NestJS)
Se recomienda utilizar plataformas PaaS (Platform as a Service) que soporten Node.js y bases de datos PostgreSQL, tales como:

Render

Heroku

AWS Elastic Beanstalk

Frontend (React)
El frontend estático puede ser desplegado fácilmente en servicios como:

Vercel

Netlify

GitHub Pages

En el mismo servidor que el backend, si se configura correctamente (ej. sirviendo los archivos estáticos desde NestJS).

📂 Estructura de Directorios
Una visión general de la organización del proyecto:

Morel_IA/
├── backend/
│   ├── src/
│   │   ├── appointments/        # Lógica para citas/turnos
│   │   ├── auth/                 # Lógica de autenticación (JWT)
│   │   ├── patients/             # Módulo de gestión de pacientes
│   │   ├── sessions/             # Módulo de gestión de sesiones
│   │   ├── session-analysis/     # Módulo para el análisis con IA
│   │   ├── users/                # Módulo de usuarios (médicos/profesionales)
│   │   ├── config/               # Archivos de configuración (DB, JWT, etc.)
│   │   └── main.ts               # Punto de entrada de la aplicación NestJS
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/               # Imágenes, íconos, etc.
    │   ├── components/           # Componentes reutilizables de React
    │   ├── pages/                # Vistas principales de la aplicación
    │   ├── services/             # Funciones para llamadas a la API (Axios)
    │   ├── App.tsx               # Componente principal de la aplicación
    │   └── index.tsx             # Punto de entrada de React
    ├── package.json
    └── vite.config.ts

