# RBAC Backend API
# 🔐 RBAC Backend API

A robust and secure **Role-Based Access Control (RBAC)** backend built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**. This API allows you to create users, assign roles, and manage access to resources based on permissions.

## 🚀 Features

- 🔐 User authentication with JWT
- 🔒 Secure password hashing using bcrypt
- 🛡️ Role-based authorization middleware
- 👨‍💼 Admin/User/Moderator-level access control
- 🔗 Protected API routes based on roles
- 🗃️ MongoDB with Mongoose ODM
- 📦 Clean and modular project structure

---

## 📁 Project Structure


rbac-backend/ ├── controllers/ │ └── auth.controller.js │ └── user.controller.js ├── middleware/ │ └── auth.middleware.js │ └── role.middleware.js ├── models/ │ └── user.model.js │ └── role.model.js ├── routes/ │ └── auth.routes.js │ └── user.routes.js ├── config/ │ └── db.config.js ├── .env ├── server.js └── package.json


---

## 🛠️ Installation

git clone https://github.com/yourusername/rbac-backend.git
cd rbac-backend
npm install
# Start in development mode
npm run dev
🔐 Authentication & Authorization
🔑 Login with email & password to receive a JWT token

🛂 Add token to Authorization header as a Bearer token:

http
Copy
Edit
Authorization: Bearer <your_token>
👥 Example Roles:
👑 admin

🧑‍💼 moderator



🙋‍♂️ user




📦 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/signup	📝 Register new user
POST	/api/auth/login	🔓 Login user & get token
👤 User Routes
Method	Endpoint	Description	Role Required
GET	/api/users	📋 Get all users	Admin
GET	/api/users/:id	👁️ Get single user	Admin/User



🧰 Tech Stack
⚙️ Node.js

🚂 Express.js

🍃 MongoDB + Mongoose

🔐 JWT

🧂 bcrypt

🧪 dotenv

🔁 nodemon



Here’s your updated `README.md` for the **RBAC Backend API**, now enhanced with emojis for a more engaging and modern look:

---

```md
# 🔐 RBAC Backend API

A robust and secure **Role-Based Access Control (RBAC)** backend built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**. This API allows you to create users, assign roles, and manage access to resources based on permissions.

## 🚀 Features

- 🔐 User authentication with JWT
- 🔒 Secure password hashing using bcrypt
- 🛡️ Role-based authorization middleware
- 👨‍💼 Admin/User/Moderator-level access control
- 🔗 Protected API routes based on roles
- 🗃️ MongoDB with Mongoose ODM
- 📦 Clean and modular project structure

---

## 📁 Project Structure

```
rbac-backend/
├── controllers/
│   └── auth.controller.js
│   └── user.controller.js
├── middleware/
│   └── auth.middleware.js
│   └── role.middleware.js
├── models/
│   └── user.model.js
│   └── role.model.js
├── routes/
│   └── auth.routes.js
│   └── user.routes.js
├── config/
│   └── db.config.js
├── .env
├── server.js
└── package.json
```

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/rbac-backend.git
cd rbac-backend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/rbac_db
JWT_SECRET=your_jwt_secret
```

---

## 🧪 Running the App

```bash
# Start in development mode
npm run dev
```

---

## 🔐 Authentication & Authorization

- 🔑 **Login** with email & password to receive a JWT token
- 🛂 Add token to `Authorization` header as a Bearer token:

```http
Authorization: Bearer <your_token>
```

### 👥 Example Roles:

- 👑 `admin`
- 🧑‍💼 `moderator`
- 🙋‍♂️ `user`

Each role has different permissions for accessing resources.

---

## 📦 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| POST   | `/api/auth/signup`  | 📝 Register new user |
| POST   | `/api/auth/login`   | 🔓 Login user & get token |

### 👤 User Routes

| Method | Endpoint             | Description         | Role Required |
|--------|----------------------|---------------------|---------------|
| GET    | `/api/users`         | 📋 Get all users    | Admin         |
| GET    | `/api/users/:id`     | 👁️ Get single user  | Admin/User    |

---

## 🧰 Tech Stack

- ⚙️ **Node.js**
- 🚂 **Express.js**
- 🍃 **MongoDB** + **Mongoose**
- 🔐 **JWT**
- 🧂 **bcrypt**
- 🧪 **dotenv**
- 🔁 **nodemon**

---

## 🤝 Contributing

Contributions are welcome! 💬  
Open issues, fork the repo, and submit pull requests.

```bash
# Clone the repo and create a new branch
git checkout -b feature/your-feature-name
```

---

## 📄 License

📝 [MIT License](LICENSE)

---

## 📚 Resources

- 📖 [RBAC – Auth0 Docs](https://auth0.com/docs/manage-users/access-control/rbac)
- 🧾 [JWT Guide – jwt.io](https://jwt.io/introduction)
- 📘 [Express Documentation](https://expressjs.com/)
- 🐦 [Mongoose Docs](https://mongoosejs.com/)
```

---

Would you like me to also generate a sample `.env`, seed script for roles, or a Postman collection for API testing?
