# CineVault API (Backend)

A robust, modular RESTful API service for managing a comprehensive movie database. Built with Node.js, Express.js, and MongoDB, this backend is designed following the MVC (Model-View-Controller) architecture to provide scalable and efficient CRUD operations.

This API serves as the backbone for the frontend React client, handling data validation, routing, and database communication.

---

## Features

- **MVC Architecture**: Clean separation of business logic, database schemas, and API routes.
- **Full CRUD Operations**: Endpoints to dynamically create, read, update, and delete movie records.
- **Schema Validation**: Strict data modeling and validation using Mongoose.
- **CORS Configured**: Safely handles Cross-Origin requests from the frontend client.
- **Environment Management**: Secure handling of database URIs and ports via dotenv.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas/Local)
- **ODM**: Mongoose
- **API Testing**: Postman

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v16 or higher)
- MongoDB Compass (or Atlas connection)

### Installation

1. Clone the repository:

    git clone <your-backend-repo-url>
    cd <your-backend-folder-name>

2. Install dependencies:

    npm install

3. Configure Environment Variables:
Create a .env file in the root directory and add:

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/movies_db

4. Run the Server:

    npm run dev

The server will start on http://localhost:3000

---

## API Endpoints

| Method   | Endpoint      | Description           | Request Body (JSON)              |
| :------- | :------------ | :-------------------- | :------------------------------- |
| GET      | /movies       | Retrieve all movies   | None                             |
| POST     | /movies       | Create a new movie    | Title, overview, release_date... |
| PUT      | /movies/:id   | Update a movie by ID  | Fields to update                 |
| DELETE   | /movies/:id   | Delete a movie by ID  | None                             |
