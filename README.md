# ⚙️ CineVault API - Movie Database Backend

A robust RESTful API service for managing a movie database built using Node.js, Express.js, and MongoDB. This project follows the Model-View-Controller (MVC) architectural pattern and provides complete CRUD functionality.

[![Live Demo](https://img.shields.io/badge/API_Status-Online-brightgreen?style=for-the-badge)](#) 

## ✨ Features

- **MVC Architecture**: Clear separation of concerns.
- **Full CRUD Operations**: Create, read, update, and delete movies.
- **Data Validation**: Schema-level validation using Mongoose.
- **CORS Enabled**: Secure cross-origin requests for the React client.
- **Environment Management**: Configuration handled safely via dotenv.

## 🛠 Tech Stack

| Runtime        | Framework      | Database       | Testing        |
|----------------|----------------|----------------|----------------|
| Node.js        | Express.js     | MongoDB        | Postman        |
| Nodemon        | Dotenv         | Mongoose       | REST API       |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB Community Server or Atlas URL
- Postman (optional for testing)

### Installation

1. Clone the repository:
    git clone [https://github.com/yourusername/movies-api.git](https://github.com/yourusername/movies-api.git)
    cd movies-api

2. Install dependencies:
    npm install

3. Set up environment variables:
    Create a .env file and fill in your credentials:

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/movies_db

4. Run the development server:
    npm run dev

## 📂 Project Structure

    movies-api/
    ├── config/
    │   └── db.js                 # Database connection setup
    ├── controllers/
    │   └── movies.controller.js  # Business logic for movies
    ├── models/
    │   └── movie.model.js        # Mongoose database schema
    ├── routes/
    │   └── movies.routes.js      # API route definitions
    ├── .env                      # Environment variables
    └── server.js                 # Application entry point

## 📡 API Endpoints

| Method | Endpoint      | Description           | Request Body                     |
| :----- | :------------ | :-------------------- | :------------------------------- |
| GET    | /movies       | Retrieve all movies   | None                             |
| POST   | /movies       | Create a new movie    | Title, overview, release_date... |
| PUT    | /movies/:id   | Update a movie by ID  | Fields to update                 |
| DELETE | /movies/:id   | Delete a movie by ID  | None                             |

## 🤝 Contributing

We welcome contributions! 
1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See LICENSE for more information.

---

Made with ❤️ by Adeel Manzoor | Taskeen Haider
