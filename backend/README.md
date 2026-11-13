# Vastora Tech — Backend API Engine

Enterprise Node.js/Express API powering the **Vastora Tech** digital agency ecosystem, client lead generation, case studies, blogs, white-label demos, and administrative services.

---

## Technical Stack

- **Runtime**: Node.js & Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens), Bcrypt.js
- **Integrations**: Stripe Payments, Cloudinary Media Storage, Nodemailer
- **Security**: Helmet, Express Rate Limit, CORS protection

---

## Key API Modules

- `/api/leads` — Client project inquiry intake & CRM distribution
- `/api/contact-submissions` — Global contact form submissions
- `/api/blogs` — Agency editorial articles, case studies & category management
- `/api/demos` — Interactive white-label client demo booking
- `/api/admin` — Secure administrator authentication & role management
- `/api/customer-order` — Enterprise invoice generation & billing sync

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure `MONGO_URI`, `JWT_SECRET`, and `PORT` are properly defined.

### 3. Run in Development
```bash
npm run dev
```

### 4. Run in Production
```bash
npm start
```

---

## Directory Architecture

- `api/` — Express server initialization, middleware & socket handling
- `config/` — Database connection & JWT authentication middleware
- `controller/` — Business logic and request controllers
- `models/` — Mongoose data schemas and validation models
- `routes/` — Express route declarations
- `lib/` — Email sender templates & external service clients
- `utils/` — System settings, seed data & cryptographic helpers

---

## License & Ownership

Copyright © 2014–2026 Vastora Tech. All rights reserved.
Proprietary Agency Backend System.
