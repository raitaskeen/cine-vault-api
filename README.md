# ⚙️ CineVault API - Movie Database Backend

A robust RESTful API service for managing a movie database built using Node.js, Express.js, and MongoDB. This project follows the Model-View-Controller (MVC) architectural pattern and provides complete CRUD functionality along with secure JWT authentication, role-based access control, and a user favorites system.

[![Live Demo](https://img.shields.io/badge/API_Status-Online-brightgreen?style=for-the-badge)](#) 

## ✨ Features

- **MVC Architecture**: Clear separation of concerns for scalable development.
- **Secure Authentication**: JWT-based user registration and login (password hashing via bcrypt).
- **Role-Based Access Control**: Protected routes ensuring only Admins can modify the movie database.
- **User Favorites System**: Authenticated users can add or remove movies from their personalized wishlist.
- **Full CRUD Operations**: Create, read, update, and delete movies seamlessly.
- **Data Validation**: Schema-level validation using Mongoose.
- **CORS Enabled**: Secure cross-origin requests for the React client.

## 🛠 Tech Stack

| Runtime        | Framework      | Database       | Security & Testing |
|----------------|----------------|----------------|--------------------|
| Node.js        | Express.js     | MongoDB        | JSON Web Token     |
| Nodemon        | Dotenv         | Mongoose       | Bcrypt.js          |
|                | CORS           |                | Postman            |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB Community Server or Atlas URL
- Postman (optional for testing)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/movies-api.git](https://github.com/yourusername/movies-api.git)
   cd movies-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and fill in your credentials:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/movies_db
   JWT_SECRET=super_secret_key_123
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
movies-api/
├── config/
│   └── db.js                 # Database connection setup
├── controllers/
│   ├── auth.controller.js    # Logic for login/register
│   └── movies.controller.js  # Business logic for movies
├── middleware/
│   └── auth.middleware.js    # JWT verification & Admin protection
├── models/
│   ├── user.model.js         # User schema with favorites array
│   └── movie.model.js        # Mongoose database schema
├── routes/
│   ├── auth.routes.js        # Authentication & favorites routes
│   └── movies.routes.js      # Movie CRUD route definitions
├── .env                      # Environment variables
└── server.js                 # Application entry point
```

## 📡 API Endpoints

### 🎬 Movies
| Method | Endpoint      | Access        | Description           | Request Body                     |
| :----- | :------------ | :------------ | :-------------------- | :------------------------------- |
| GET    | `/movies`     | Public        | Retrieve all movies   | None                             |
| POST   | `/movies`     | Admin Only    | Create a new movie    | Title, overview, release_date... |
| PUT    | `/movies/:id` | Admin Only    | Update a movie by ID  | Fields to update                 |
| DELETE | `/movies/:id` | Admin Only    | Delete a movie by ID  | None                             |

### 🔐 Authentication & Users
| Method | Endpoint                | Access        | Description                    | Request Body             |
| :----- | :---------------------- | :------------ | :----------------------------- | :----------------------- |
| POST   | `/auth/register`        | Public        | Register a new user            | Name, email, password    |
| POST   | `/auth/login`           | Public        | Authenticate & get token       | Email, password          |
| GET    | `/auth/favorites`       | Authenticated | Get logged-in user's favorites | None                     |
| POST   | `/auth/favorites/:id`   | Authenticated | Toggle movie in favorites list | None                     |

## 🤝 Contributing

We welcome contributions! 
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Made with ❤️ by Adeel Manzoor | Taskeen Haider