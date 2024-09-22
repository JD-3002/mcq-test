# Adaptive Mock Test Application

This is an Adaptive Mock Test application that dynamically adjusts the difficulty of questions based on the user's performance and response time. The project is divided into two main parts: the frontend and backend.

## Project Structure

```bash
adaptive-mock-test/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Question.jsx
│   │   │   └── Timer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Test.jsx
│   │   │   └── Results.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── backend/
    ├── src/
    │   ├── controllers/
    │   │   ├── questionController.js
    │   │   └── resultController.js
    │   ├── models/
    │   │   └── TestResult.js
    │   ├── routes/
    │   │   ├── questions.js
    │   │   └── results.js
    │   └── index.js
    ├── .env
    └── package.json
```

## Installation

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Initialize Node.js and install dependencies**:
   ```bash
   npm init -y
   npm install express cors dotenv axios mongoose
   npm install --save-dev nodemon
   ```

3. **Create a `.env` file** and add your MongoDB Atlas URI:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=5000
   ```

4. **Run the backend**:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Initialize Vite and install dependencies**:
   ```bash
   npm create vite@latest . -- --template react
   npm install axios react-router-dom @radix-ui/react-slot
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Install additional UI components**:
   ```bash
   npm install @radix-ui/react-popover @radix-ui/react-dropdown-menu date-fns
   npm install lucide-react
   ```

4. **Create a `.env` file** and add the backend API URL:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Run the frontend**:
   ```bash
   npm run dev
   ```

### MongoDB Setup

1. Create a MongoDB Atlas account if you don't have one.
2. Create a new cluster and a database user.
3. Get your MongoDB connection string and add it to the `.env` file in the backend.

## Features

- **Adaptive Difficulty**: Adjusts question difficulty based on performance.
- **Timer**: Tracks how quickly the user answers each question.
- **Question Management**: Fetches and renders questions dynamically from an API.
- **Results Calculation**: Calculates and saves user test results, including score, accuracy, and average response time.
- **Frontend Tech Stack**: React, Vite, TailwindCSS, Axios, Radix UI.
- **Backend Tech Stack**: Node.js, Express, MongoDB, Mongoose.

## Usage

- Start a test on the home page.
- Answer questions and the difficulty will adapt based on your response time and correctness.
- View the results at the end of the test, including the difficulty progression and overall performance.

---


