# 🎵 Melofy – Full-Stack Music Streaming App

> _“Built with code, powered by beats — crafted with care by **Shivu**.”_

Melofy is a full-stack music streaming web application that allows users to listen to songs and provides an admin panel to upload and manage them. Built using the **MERN stack** and **MongoDB Atlas**, it delivers a smooth, scalable, and responsive experience for both users and administrators.

---

## ✅ Features

### 🎧 User Interface
- Browse and stream songs from a real-time playlist
- Responsive and clean audio player interface
- Works across desktop and mobile devices

### 🛠 Admin Dashboard
- Secure admin page to upload new songs
- Add metadata like title, artist, and genre
- Instant updates with MongoDB Atlas

---

## 🧰 Tech Stack

- **Frontend:** React.js, HTML5, CSS3
- **Backend:** Node.js, Express.js

- **Database:** MongoDB Atlas (Cloud Database)
- **(Optional) Media Storage:** Cloudinary or AWS S3

---

## 📁 Folder Structure
Melofy-Music/
├── client/               # React frontend
│   └── src/
│       ├── components/   # Reusable components (Player, Navbar, etc.)
│       ├── pages/        # Routes like Home and Admin
│       └── App.js
├── server/               # Node + Express backend
│   ├── models/           # Mongoose models (e.g., Song)
│   ├── routes/           # API routes for songs and admin actions
│   ├── controllers/      # Logic to handle routes
│   └── server.js         # Entry point of backend
├── .env                  # Environment variables (Mongo URI, etc.)
└── README.md             # This file



 1️⃣ Clone the repository

	git clone https://github.com/Shivakumar-M-M/Melofy-Music.git
	cd Melofy-Music

---
 2️⃣ Setup the Backend
	
	cd server
	npm install
	Create a .env file with your MongoDB URI
	npm start
 ---
  3️⃣ Setup the Frontend
  
	cd client
 	npm install
	npm start
  ---
 4️⃣ Open in Browser
 
	User interface: http://localhost:3000
	Admin panel: http://localhost:3000/admin

 🔐 Environment Variables
  Create a .env file inside the server/ directory:
  
 	MONGO_URI=your_mongodb_atlas_connection_string
	PORT=5000


✍️ Author
 Shivakumar M M (Shivu)
“Melofy: Because good code deserves a great soundtrack.”

 GitHub: @Shivakumar-M-M
