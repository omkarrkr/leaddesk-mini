# 🚀 LeadDesk Mini

A modern **full-stack Lead Management System** built using the **MERN Stack**. It enables businesses to collect client inquiries through a professional landing page and manage them from a secure admin dashboard.

---

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-purple?logo=render)
![License](https://img.shields.io/badge/License-Educational-blue)

---

# 🌐 Live Demo

### Frontend
https://leaddesk-mini-liard.vercel.app

### Backend API
https://leaddesk-backend-p357.onrender.com

### Admin Login
https://leaddesk-mini-liard.vercel.app/admin/login

---

# 🔑 Demo Admin Credentials

Use these credentials to access the admin dashboard.

**Email**

```
admin@webcraft.com
```

**Password**

```
admin123
```

---

# ✨ Features

## 🌐 Landing Page

- Responsive modern UI
- Hero section
- Services section
- Contact form
- Beautiful footer
- Mobile-friendly design

## 📋 Lead Management

- Submit new leads
- Store leads in MongoDB Atlas
- Form validation
- Loading indicators
- Success & error toast notifications

## 🔐 Admin Dashboard

- JWT Authentication
- Protected Routes
- Secure Login
- Dashboard Statistics
- Search Leads
- Update Lead Status
- Responsive Table
- Logout functionality

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- Lucide React Icons

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- CORS
- dotenv

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 📁 Project Structure

```text
LeadDesk-Mini
│
├── client
│   ├── src
│   ├── public
│   └── ...
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── ...
│
├── screenshots
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/omkarrkr/leaddesk-mini.git
```

---

## Install Frontend

```bash
cd client
npm install
npm run dev
```

---

## Install Backend

```bash
cd server
npm install
npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📡 API Endpoints

## Lead APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/leads` | Create Lead |
| GET | `/api/leads` | Get All Leads |
| PUT | `/api/leads/:id` | Update Lead Status |

## Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | Admin Login |

---

# 📸 Screenshots

## 🏠 Home Page

![Home Page](./screenshots/home.png)

---

## 📝 Lead Form

![Lead Form](./screenshots/leadform.png)

---

## 🔐 Admin Login

![Admin Login](./screenshots/login.png)

---

## 📊 Admin Dashboard

![Admin Dashboard](./screenshots/dashboard.png)

---

# 🚀 Future Improvements

- Export Leads to CSV
- Email Notifications
- Admin Profile Management
- Pagination
- Analytics Dashboard
- Dark Mode
- Multiple Admin Accounts

---

# 👨‍💻 Author

**Omkar Kumar**

B.Tech Computer Science & Engineering

BMS College of Engineering

GitHub:
https://github.com/omkarrkr

---

# 📄 License

This project was developed for educational and training purposes.

---

# 🙏 Acknowledgements

This project was built as part of the **Digital Heroes Training Task** to demonstrate full-stack web development skills using the MERN stack.