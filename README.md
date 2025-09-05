# BikePoint - Full-Stack Motorcycle Showroom & Service Website


Welcome to BikePoint, a complete full-stack MERN application designed for a local motorcycle showroom. This project features a modern, responsive frontend built with React and Tailwind CSS, and a robust backend powered by Node.js, Express, and MongoDB.

This application provides a professional online presence, allowing customers to browse an extensive catalog of motorcycles, book test rides, and view detailed service information. It also includes a secure authentication system with separate access for customers and a private dashboard for administrators to manage appointments.

---

## ✨ Features

*   **Modern Frontend:** A sleek, responsive UI built with **React** and styled with **Tailwind CSS**, featuring smooth animations from **Framer Motion**.
*   **Dynamic Bike Catalog:** A complete catalog of 20+ motorcycles, managed from a central `bikeData.js` file for easy updates.
*   **Powerful Search & Filter:** Users can search for bikes with fuzzy search for typos and filter the results by category.
*   **Full-Stack Booking System:** Users can book test rides, with data securely saved to a MongoDB database via a RESTful API.
*   **User Authentication:** A complete registration and login system for customers using hashed passwords (`bcryptjs`) for security.
*   **Secure Admin Dashboard:** A private route guards the admin dashboard, accessible only via a separate admin login. The dashboard displays all customer test ride bookings.
*   **Detailed Service Information:** A dedicated page with interactive accordions showing detailed service schedules and checklists, building customer trust.

---

## 🛠️ Technology Stack

### **Frontend**
*   **Framework/Library:** React 
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM
*   **Animation:** Framer Motion
*   **HTTP Client:** Axios
*   **Icons:** React Icons

### **Backend**
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB (via MongoDB Atlas)
*   **ODM:** Mongoose
*   **Authentication:** bcryptjs (for password hashing)
*   **Environment Variables:** dotenv
*   **Middleware:** CORS

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

*   Node.js (v16 or later recommended)
*   npm (which comes with Node.js)
*   A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account to host your database.

### **Installation & Setup**

1.  **Clone the repository to your local machine:**
    ```bash
    git clone https://github.com/your-username/bikepoint-fullstack-app.git
    cd bikepoint-fullstack-app
    ```

2.  **Setup the Backend:**
    *   Navigate to the backend directory:
        ```bash
        cd backend
        ```
    *   Install the necessary dependencies:
        ```bash
        npm install
        ```
    *   Create a `.env` file in the `backend` root directory. This file will hold your secret database connection string.
    *   Add your MongoDB Atlas connection string to the `.env` file. It should look like this:
        ```
        MONGO_URI=mongodb+srv://your_username:your_password@cluster...
        ```
    *   Start the backend server:
        ```bash
        npm run dev
        ```
    *   The backend will now be running on `http://localhost:5000`. You should see a "MongoDB Connected..." message in the terminal.

3.  **Setup the Frontend:**
    *   Open a **new terminal window**.
    *   Navigate to the frontend directory from the project root:
        ```bash
        cd frontend
        ```
    *   Install the necessary dependencies:
        ```bash
        npm install
        ```
    *   Start the frontend development server:
        ```bash
        npm run dev
        ```
    *   The frontend application will now be running and accessible at `http://localhost:5173`.

---

## 🔑 Available Credentials

For testing purposes, two types of accounts are available:

### **Admin Account**
This account has access to the protected `/dashboard` route to view all test ride bookings.
*   **Username:** `admin`
*   **Password:** `password123`

### **User Account**
You can register any number of regular user accounts through the `/register` page. These accounts can log in to receive a personalized welcome message.

---

# BikePoint - Full-Stack Motorcycle Showroom & Service Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](http://stupendous-smakager-127e92.netlify.app)


## 📜 License

This project is licensed under the MIT License.
