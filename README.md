# VEGANMED — Pharmacy E-commerce MVP

A fully functional pharmacy e-commerce application where users can purchase organic and prescription-based medicines. The platform supports prescription uploads, admin/pharmacist approvals, and inventory management.

## 🏗 Architecture

```mermaid
graph LR
    User((User)) --> Client[Frontend (React + Vite)]
    Client -->|REST API| Server[Backend (Node + Express)]
    Server -->|Read/Write| DB[(MongoDB)]
    Server -->|Store/Retrieve| FileSys[Local Uploads / Storage]
```

## 🚀 Usage

### Prerequisites
- Node.js >= 18
- Docker & Docker Compose (Recommended)
- MongoDB (if running locally without Docker)

### Quick Start (Docker)

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd doctorssssss
   ```

2. **Setup Environment Variables**
   Copy `.env.example` to `.env` in both `backend` and `frontend` directories (if needed, defaults usually work for local docker).
   ```bash
   cd backend && cp .env.example .env
   cd ../frontend && cp .env.example .env
   cd ..
   ```

3. **Run with Docker Compose**
   This command starts MongoDB, Backend, and Frontend.
   ```bash
   docker-compose up --build
   ```
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:5000](http://localhost:5000)

4. **Seed Database**
   Open a new terminal and run the seed script inside the backend container or locally if Node is installed.
   ```bash
   # Via Docker
   docker-compose exec backend npm run seed
   
   # Or Locally (ensure MongoDB is running)
   cd backend
   npm run seed
   ```

### Running Locally (Manual)

1. **Start MongoDB**
   Ensure your local MongoDB instance is running.

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Update .env with your local Mongo URI if different
   npm run seed
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🔑 Default Credentials (Seeded)

The `npm run seed` command ensures these accounts exist:

| Role       | Email                | Password      | Capabilities |
|------------|----------------------|---------------|--------------|
| **Admin**  | `admin@example.com`  | `password123` | Manage Users, Products, Prescriptions, Orders |
| **Pharmacist**| `pharma@example.com`| `password123` | Approve/Reject Prescriptions |
| **User**   | `user@example.com`   | `password123` | Buy products, Upload prescriptions |

## 🧪 Testing

### Backend Tests
Integration and Unit tests using Jest & Supertest.
```bash
cd backend
npm test
```

### Auth Verification Script
A simple script to verify login/signup flows.
```bash
cd backend
node test_auth.js
```

## 📚 API Documentation

### Import Postman Collection
(Placeholder: Import the `postman_collection.json` file if provided in the repo)

### Key Endpoints

- **Auth**
  - `POST /api/auth/register` - Register new user
  - `POST /api/auth/login` - Login & get JWT

- **Products**
  - `GET /api/products` - List all products
  - `POST /api/products` - Create product (Admin/Pharma)
  - `PUT /api/products/:id` - Update with stock/expiry validation

- **Prescriptions**
  - `POST /api/prescriptions` - Upload prescription (Multer)
  - `PUT /api/prescriptions/:id/review` - Approve/Reject (Admin/Pharma)

## 🛠 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js, Express Validator, Multer
- **Database**: MongoDB, Mongoose
- **Auth**: JWT, Bcrypt
- **DevOps**: Docker, Docker Compose

## 🛡 Features Checklist

- [x] Dockerized Environment
- [x] User Authentication (JWT)
- [x] Searchable Product Catalog
- [x] Database Seeding
- [x] Prescription Upload & Review
- [x] Cart & Atomic Stock Management
- [ ] Expiry Date Validation
- [ ] Admin Dashboard
