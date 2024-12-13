# FitConnect - Fitness Trainer Appointment App

FitConnect is a web application built using the **MERN stack** (MongoDB, Express, React, Node.js) that allows users to book appointments with fitness trainers. The app provides a platform for trainers to manage appointments, clients to view trainer profiles, and clients to schedule training sessions.

This project also uses **Redux** for state management and is set up with **Vite** for a fast development experience.

---

## 🚀 Features

- User authentication (sign up, login).
- Trainers can manage their schedules.
- Clients can browse trainers and book appointments.
- State management with **Redux**.
- API is built with **Node.js** and **Express**.
- Frontend is built with **React**.
- **MongoDB** for database storage.

---

## 🛠 Technologies Used

- **Frontend**: React, Vite, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: Redux
- **Styling**: CSS (or any styling method you use)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (preferably the latest stable version)
- [npm](https://www.npmjs.com/) (Node package manager)


---

## 💻 Setup Instructions

Follow these steps to get your development environment running.

---

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```
git clone https://github.com/Rizwanhu/FitConnect--Fitness-Trainer-Appointment-App.git
cd FitConnect--Fitness-Trainer-Appointment-App
```

---

## 2. Install Backend Dependencies
Navigate to the backend directory and install the necessary dependencies:

```
cd backend
npm install
```

---

## 3. Install Frontend Dependencies
Navigate to the frontend directory and install the necessary dependencies:

```
cd ../frontend
npm install
```

---

## 4. Set Up Environment Variables
Create a .env file in the root directory for both the frontend and backend.

Frontend Environment Variables (frontend/.env):
```
VITE_API_URL=http://localhost:5000/api
```

---

# Backend Environment Variables (backend/.env):

```
MONGO_URI=mongodb://localhost:27017/fitconnect
JWT_SECRET=your-jwt-secret
PORT=5000
```
Note: Make sure to replace your-jwt-secret with your actual JWT secret key.

---

## 5. Run the Project
Start the Backend (API Server)
Navigate to the backend directory and run:
```
cd backend
npm run dev
```
This will start the backend server, typically on http://localhost:5000.

---

## Start the Frontend (React App)
In a separate terminal, navigate to the frontend directory and run:
```
cd frontend
npm run dev
```
This will start the frontend React app, typically on http://localhost:3000.

---

## 🖥 Access the Application
Once both the backend and frontend are running, open your browser and navigate to http://localhost:3000 to access the application.

---

## 📝 Available Scripts
In the frontend and backend directories, you can run the following commands:

---

## For Frontend (frontend directory):
npm run dev: Start the React development server using Vite.
npm run build: Build the project for production.
npm run preview: Preview the built project.

---

## For Backend (backend directory):
npm run dev: Start the backend server in development mode (using nodemon).
npm run start: Start the backend server in production mode.

---

## 📁 Folder Structure
Here’s an overview of the project’s folder structure:

```plaintext
/FitConnect--Fitness-Trainer-Appointment-App
  /backend          # Backend API (Node.js/Express)
    /controllers    # API request handlers
    /models         # MongoDB models
    /routes         # Express routes
    /middleware     # Middlewares (e.g., authentication)
    .env            # Backend environment variables
    server.js       # Entry point for backend
  /frontend         # React frontend (Vite)
    /src
      /components   # React components
      /redux        # Redux slices, actions, reducers
      /pages        # React pages
      .env          # Frontend environment variables
      index.jsx     # Entry point for frontend
  .gitignore        # Git ignore file
  README.md         # This file
```

---

## 💡 Notes
# JWT Authentication: The app uses JSON Web Tokens (JWT) for authenticating users. After logging in, users receive a token that they must include in the Authorization header for protected routes.
# MongoDB: The app is connected to a MongoDB database. Make sure to have MongoDB running locally or use a cloud service like MongoDB Atlas.
# Redux: State management is handled by Redux for seamless global state handling (e.g., authentication state, user data, etc.).

---

## 🤝 Contributing
We welcome contributions! If you have any suggestions, improvements, or bug fixes, feel free to fork this repository, create a pull request, and submit your changes.

---

## How to Contribute
Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes.
Test your changes.
Commit your changes and push them to your forked repository.
Create a pull request with a clear description of your changes.

---

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🎉 Happy Coding!

