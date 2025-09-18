# Shopping Web Application

A full-stack e-commerce web app built with the MERN stack: **MongoDB**, **Express**, **React**, **Node.js**.  
Includes separate portals for **Admin** and **Client**, plus a backend API + database.


---

## Features

- Admin Portal: manage products, orders, users, maybe categories  
- Client Portal: browse products, add to cart, checkout, view order history  
- Authentication & Authorization (Admin vs Client)  
- RESTful APIs for backend  
- React frontend with client-side routing  
- Secure data handling, validation, CORS support 


## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, React Router, CSS (or styled-components / whatever) |
| Backend / API | Node.js, Express |
| Database | MongoDB (Atlas or local) |
| Authentication | JWT (or sessions) |
| Hosting / Deployment | Netlify (frontends), Render / Heroku / Railway (backend), MongoDB Atlas |

---


## Setup & Installation

1. Clone this repo  
   ```bash
   git clone https://github.com/Saishiva-Nani/shoppingWebApplication.git
   cd shoppingWebApplication
2. Frontend (Client Portal)

    cd frontend
    npm install

3. Admin Portal

    cd ../admin
    npm install

4. Backend
    cd ../backend
    npm install


Environment Variables

Create a .env file in the backend folder. Set the following (example names):

PORT=5000
MONGODB_URI=<your MongoDB connection string>
JWT_SECRET=<your JWT secret>
CLIENT_URL=<frontend URL>     # for CORS/origin
ADMIN_URL=<admin portal URL>   # if different


Available Scripts:

1. In Frontend / Admin

npm start — starts dev server

npm run build — builds production static files

2. In Backend

npm start or node index.js (or whatever entry) — starts server

npm run dev — start with nodemon (if configured)
