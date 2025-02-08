# BlogifyApp - Full Stack Blogging Application

## 🚀 Overview
**BlogifyApp** is a full-stack blogging application built using modern web technologies. The project is currently in the development phase.

## 🛠 Tech Stack
### **Frontend:**
- **React.js** – Used for building the user interface.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **TypeScript** – Strongly typed JavaScript for better development experience.

### **Backend:**
- **Hono.js** – Backend framework running on Cloudflare Workers.
- **Cloudflare Workers** – Serverless runtime environment.
- **TypeScript** – Used for type-safe backend development.

### **Database & Authentication:**
- **PostgreSQL** – Relational database for storing blog data.
- **Prisma ORM** – Used for database management and interactions.
- **Zod** – Schema validation.
- **JWT Authentication** – Secure authentication mechanism.

## 📌 Features (In Development)
- **User Authentication (JWT-based)**
- **Blog Post Creation & Management**
- **Schema Validation with Zod**
- **Database Management with Prisma**

## 📂 Project Structure
```
BlogifyApp/
├── frontend/      # React.js frontend with Tailwind CSS & TypeScript
├── backend/       # Hono.js backend with TypeScript
├── common/        # Shared utilities and configurations (Zod inferred types published to NPM)
```

## 🚀 Getting Started
### **1. Clone the Repository**
```sh
git clone https://github.com/mustafamubashir03/BlogifyAppPublic.git
cd BlogifyApp
```
### **2. Install Dependencies**
```sh
npm install  # or yarn install
```
### **3. Setup Environment Variables**
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```
### **4. Run the Application**
```sh
npm run dev  # Start frontend & backend in development mode
```

## 🌐 Live Application
Check out the live version of the app:
[BlogifyApp Live](https://blogify-app-azure.vercel.app/)

## 🐝 License
This project is open-source and licensed under the [MIT License](LICENSE).

## 💎 Contact
For any questions or feedback, reach out at [mustafamubashir87@gmail.com](mailto:mustafamubashir87@gmail.com).

---
🔗 **Follow for updates:** [GitHub](https://github.com/mustafamubashir03)

