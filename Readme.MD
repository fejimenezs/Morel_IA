🧠 Morel AI: Patient Management Platform with AI Analysis

Morel AI is a comprehensive application designed for patient management and session analysis using Artificial Intelligence (AI). It provides a web interface for healthcare professionals, enabling efficient handling of clinical information and the generation of detailed reports based on session data.

📝 Project Description

The main goal of Morel AI is to offer a robust and scalable platform for managing patient and session data. Its key feature is the ability to perform automated session analysis using AI, helping doctors and professionals gain valuable insights into their patients’ status and progress.

The application consists of a powerful backend developed with NestJS and a modern, intuitive frontend built with React.

✨ Key Features

Patient Management: Full CRUD functionalities (Create, Edit, List, Delete) to manage patient information.

Session Management: Recording, viewing, and updating the status of each patient’s therapy sessions.

AI Analysis: Generation of detailed reports and session analyses using Artificial Intelligence algorithms.

Secure Authentication: Login implementation for doctors and professionals using JWT (JSON Web Tokens).

User Interface: A modern, responsive, and intuitive UI developed with React and Bootstrap.


🛠️ Technologies Used

Backend (NestJS)

Technology	Description

NestJS	Progressive Node.js framework for building enterprise-grade and scalable applications.
TypeORM	ORM (Object-Relational Mapper) used to efficiently manage the database.
PostgreSQL	Robust, open-source relational database management system.
JWT	Standard for secure authentication and information exchange.


Frontend (React)

Technology	Description

React	JavaScript library for building user interfaces.
Axios	Promise-based HTTP client for making backend requests.
Bootstrap	CSS framework for fast and standardized responsive design.
Vite	Modern and fast build tool for React projects.


⚙️ Requirements

Make sure you have the following installed in your development environment:

Backend & Frontend

Node.js (v16 or higher)


Backend

PostgreSQL (running database server)


Frontend

Vite


🚀 Installation and Setup

Follow these steps to get the project up and running:

1. Clone the Repository

git clone https://github.com/fejimenezs/Morel_IA.git

2. Backend Setup

cd Morel_IA/backend
npm install

⚠️ Database Configuration

Configure your PostgreSQL database credentials in the file:

src/config/database.config.ts

Make sure your PostgreSQL server is running.

# Optional: Run migrations (if defined)
npm run build

# Start the server in production mode (or use 'npm run start:dev' for development)
npm run start:prod

The backend will run by default at:
http://localhost:3000

3. Frontend Setup

cd ../frontend
npm install

⚠️ API Configuration

Set your backend base URL in the API configuration file (usually src/api.ts or src/axios.ts):

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Adjust if your backend runs on a different port or domain
});

# Start the frontend development server
npm run dev

Open the application in your browser at:
http://localhost:5173

💻 Application Usage

Authentication: Log in to the platform using your doctor/professional credentials.

Patient Management: Use the interface to add new patients, edit their history, or view their information.

Sessions: Record each session performed and update its status.

AI Analysis: Access the session analysis feature to generate AI-powered reports.


☁️ Production Deployment

Backend (NestJS)

It is recommended to use PaaS (Platform as a Service) platforms that support Node.js and PostgreSQL databases, such as:

Render

Heroku

AWS Elastic Beanstalk


Frontend (React)

The static frontend can be easily deployed on services like:

Vercel

Netlify

GitHub Pages

On the same server as the backend, if properly configured (e.g., serving static files from NestJS).


🗺️ Directory Structure

An overview of the project organization:

Morel_IA/
├── backend/
│   ├── src/
│   │   ├── appointments/        # Logic for appointments
│   │   ├── auth/                 # Authentication logic (JWT)
│   │   ├── patients/             # Patient management module
│   │   ├── sessions/             # Session management module
│   │   ├── session-analysis/     # AI analysis module
│   │   ├── users/                # Users module (doctors/professionals)
│   │   ├── config/               # Configuration files (DB, JWT, etc.)
│   │   └── main.ts               # NestJS application entry point
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/               # Images, icons, etc.
    │   ├── components/           # Reusable React components
    │   ├── pages/                # Main application views
    │   ├── services/             # API call functions (Axios)
    │   ├── App.tsx               # Main application component
    │   └── index.tsx             # React entry point
    ├── package.json
    └── vite.config.ts