# Movies RESTful API

A modular backend service for managing a movie database built using Node.js, Express.js, and MongoDB. This project follows the Model-View-Controller (MVC) architectural pattern and provides complete CRUD (Create, Read, Update, Delete) functionality.

---

## Features

- **MVC Architecture**: Clear separation of concerns into Models, Controllers, and Routes.
- **Full CRUD Operations**: Endpoints to create, read, update, and delete movie records.
- **Data Validation**: Schema-level validation using Mongoose.
- **Environment Management**: Configuration handled safely via `dotenv`.
- **Database Integration**: Connected to MongoDB via Mongoose.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Testing**: Postman

---

## Project Structure

```text
movies-api/
├── config/
│   └── db.js                 # Database connection setup
├── controllers/
│   └── movies.controller.js  # Controller functions (business logic)
├── models/
│   └── movie.model.js        # Mongoose database schema
├── routes/
│   └── movies.routes.js      # API route definitions
├── .env                      # Environment variables
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and scripts
└── server.js                 # Application entry point
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v16 or higher)
- MongoDB Community Server & MongoDB Compass
- Postman (for API testing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movies-api
```

2. Install dependencies:
```bash
npm install
```

3. Configure Environment Variables:
Create a `.env` file in the root directory:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/movies-api-db
```

4. Run the Server:
- For development mode:
```bash
npm run dev
```
- For production mode:
```bash
npm start
```

---

## API Endpoints

| Method | Endpoint      | Description           | Request Body (JSON)              |
| :----- | :------------ | :-------------------- | :------------------------------- |
| `GET`  | `/movies`     | Retrieve all movies   | None                             |
| `POST` | `/movies`     | Create a new movie    | Title, overview, release_date... |
| `PUT`  | `/movies/:id` | Update a movie by ID  | Fields to update                 |
| `DELETE`| `/movies/:id`| Delete a movie by ID  | None                             |

---
