<div align="center">
  <h1 align="center">CodeCrush Backend 🚀</h1>

  <p align="center">
    A powerful, scalable RESTful API powering the "Tinder for Developers" platform. 
    <br />
    Connect, swipe, and collaborate with developers around the globe!
  </p>
</div>

---

## 📖 About The Project

CodeCrush (also known as *DevTinder*) is a matchmaking platform designed exclusively for developers. Whether you're looking for a coding buddy, a co-founder, or just want to expand your network, CodeCrush pairs you with like-minded tech enthusiasts. 

This repository contains the **Backend API**, built with Node.js, Express, MongoDB, and WebSockets (Socket.io) for real-time chat. It is decoupled from the frontend, ensuring high performance, scalability, and ease of maintenance.

> **Note:** The frontend application is maintained in a separate repository.

---

## ✨ Features

- **🔐 Authentication & Authorization:** Secure user registration and login using JWT & bcrypt.
- **👤 User Profiles:** Create and manage developer profiles with skills, bio, and avatars.
- **🔄 Tinder-like Swiping:** Swipe left (ignore) or right (interested) on developer profiles.
- **💬 Real-Time Chat:** Integrated WebSockets using Socket.io to chat seamlessly with your matches.
- **🛡️ Security & Validation:** Robust request validation using the `validator` library and custom middlewares.

---

## 🛠️ Built With

The backend is built using a modern JavaScript/Node.js tech stack:

*   [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
*   [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
*   [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
*   [![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
*   [![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

You will need to have the following installed on your local machine:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or MongoDB Atlas cluster)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Unibik21/CodeCrush.git
   cd CodeCrush
   ```

2. **Install NPM packages**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following keys:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   FROM_EMAIL=your_verified_ses_email@domain.com
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```
   > The API will be running on `http://localhost:5000`

---

## 📡 API Endpoints 

Here is a brief overview of the available API routes. *(Note: All protected routes require a valid JWT token in the `Authorization` header or cookies).*

### 🔐 Authentication (`/auth`)
- `POST /auth/signup` - Register a new developer.
- `POST /auth/login` - Authenticate a user and return a JWT.
- `POST /auth/logout` - Clear the auth cookie/token.

### 👤 Profile (`/profile`)
- `GET /profile/view` - View the logged-in user's profile.
- `PATCH /profile/edit` - Update the logged-in user's profile.
- `PATCH /profile/password` - Update account password.

### 🔄 Connection Requests (`/request`)
- `POST /request/send/:status/:userId` - Send a connection request (`interested` or `ignored`).
- `POST /request/review/:status/:requestId` - Accept or reject an incoming request.

### 👥 User Connections (`/user`)
- `GET /user/requests/received` - View all pending incoming requests.
- `GET /user/connections` - Get all confirmed matches.
- `GET /user/feed` - Get a feed of available developer profiles to swipe on.

### 💬 Chat (`Socket.io`)
Real-time messaging is handled via `Socket.io` events:
- Connect securely using the user's JWT token.
- Emit and listen for `sendMessage` and `receiveMessage` events within a dedicated room created for paired connections.

*(For detailed requests and responses, please refer to the respective controllers in the `src/routes` directory.)*

---

## 📁 Project Structure

```text
CodeCrush/
├── src/
│   ├── config/          # Database and environment configurations
│   ├── middlewares/     # JWT Auth, Validation, etc.
│   ├── models/          # Mongoose Schemas (User, ConnectionRequest, Message, etc.)
│   ├── routes/          # Express Routers
│   ├── utils/           # Helper functions, AWS SES configs, validators
│   └── app.js           # Express App & Socket.io initialization
├── .env                 # Environment variables
├── package.json         # Dependencies & scripts
└── README.md            # You are here!
```
---

## 📬 Contact

Utkarsh Chauhan - [GitHub Profile](https://github.com/Unibik21)

Project Link: [https://github.com/Unibik21/CodeCrush](https://github.com/Unibik21/CodeCrush)

---
<p align="center">Made with ❤️ for Developers</p>
