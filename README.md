[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mNaxAqQD)

# World Explorer - Comprehensive README

## Project Overview

World Explorer is a full-stack web application that allows users to explore countries worldwide, view detailed information, and manage a personalized list of favorite countries. The application includes user authentication and ensures that certain features (like setting favorites) are only accessible to logged-in users.

* **Frontend:** React + Tailwind CSS
* **Backend:** Node.js + Express + MongoDB
* **Hosting:** Frontend on Vercel, Backend on Railway

---

## Hosted Application URL

Link Vercel : https://rest-countries-app-front-git-61db44-sdinukarathnayakes-projects.vercel.app
Link Railway : https://rest-countries-app-backend-production.up.railway.app

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-sdinukarathnayake.git

```

### 2. Setup Backend

* Navigate to the backend folder:

```bash
cd user-service
```

* Install dependencies:

```bash
npm install
```

* Create a `.env` file with the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

* Run the server locally:

```bash
npm run dev
```

### 3. Setup Frontend

* Navigate to the frontend folder:

```bash
cd rest-countries-app
```

* Install dependencies:

```bash
npm install
```

* Run the frontend locally:

```bash
npm run dev
```

---

## Build & Deployment Instructions

### Used APIs
- https://restcountries.com/v3.1/all
- https://restcountries.com/v3.1/alpha/${code}
- https://restcountries.com/v3.1/alpha/${region}
- https://restcountries.com/v3.1/currency/${currency}
- https://restcountries.com/v3.1/capital/${capital}


### Frontend (Vercel)

1. Push the frontend to a GitHub repository.
2. Connect the repository to Vercel.
3. Set environment variables (for backend).
4. Vercel will automatically build and deploy the app.

### Backend (Railway)

1. Push your backend code to a GitHub repository.
2. Connect your Railway project to the repository.
3. Set environment variables (MONGO_URI, JWT\_SECRET).
4. Deploy the service; Railway will provide a public URL.

---

## Usage Instructions

1. Visit the application URL.
2. Register a new user or log in.
3. Browse the list of countries.
4. Mark countries as favorites using the heart icon.
5. View your favorite countries at the top of the page.

---

## Application Setup & Build Process

* **Backend:** Uses Express.js with MongoDB. JWT is used for authentication. The server runs on port 5000 by default. Nodemon is used in development.
* **Frontend:** Uses React with Tailwind CSS. Axios is used to communicate with the backend. The app is built using Vite, offering fast development and optimized production builds.
---

## Testing

The project includes comprehensive unit and integration tests for both the frontend and backend.

### Frontend Testing

- **Tools:** Jest + React Testing Library
- **Coverage:**
  - Component tests for:
    - HomePage
    - DashboardPage
    - CountryList
    - CountryDetails
    - LoginPage
    - RegisterPage
    - ProtectedRoute
- **How to Run:**

```bash
cd rest-countries-app
npm test             
npm test CountryList 
```

## Backend Testing

**Tools Used**

- **Jest:** Test runner and assertion library.
- **Supertest:** For HTTP request testing of Express routes.
- **mongodb-memory-server:** Spins up an in-memory MongoDB instance for safe, isolated testing (no real database is touched).


### Test Coverage

- **Unit Tests:**
  - User registration
  - User login
  - Toggle favorite country

- **Integration Tests:**
  - Full user flow:
    - Register, Login, Toggle Favorite, Get Favorites


- **How to Run:**
Navigate to the backend folder:

```bash
cd user-service
npm install --save-dev jest supertest mongodb-memory-server
npm test
npm test userFlow.integration.test.js
```