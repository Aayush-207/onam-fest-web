# 🎉 Onam Festival Website

<div align="center">

**A modern full-stack celebration of Kerala's rich culture**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

### 🌐 [Live Demo](https://onamfest.netlify.app/)
**Built with ❤️ for Onam Festival at MIT ADT University**
</div>

---

## ✨ Features

| 🛍️ | 📧 | 🎨 | ⚡ |
|---|---|---|---|
| **Shopping Cart** | **Email Notifications** | **Responsive UI** | **High Performance** |
| Order Management | Auto Confirmations | Mobile Optimized | Lazy Loading |

---

## 🏗️ Architecture

```
Frontend = React UI          Backend = Node.js + Express
(Netlify)                    (Render)
   ↓                            ↓
Display & Components    ←→  Payments | Orders | Emails | Database
```

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 20+  |  npm 10+  |  MongoDB  |  Git
```


📍 Visit: `http://localhost:5173`

---

## 🔒 Security

✅ Input Validation | ✅ Rate Limiting | ✅ CORS Protection | ✅ Security Headers

---

## 📂 Structure
```
Onam/
├── backend/  → API, Database, Emails
└── frontend/ → React UI, Components
```

---

<div align="center">

**Made with ❤️ for Kerala's Culture**

</div>
 



## 📁 Project Structure

```
Onam/
├── backend/                    # Backend API
│   ├── config/                 # Configuration files
│   │   ├── app.js             # Application configuration
│   │   └── database.js        # Database connection
│   ├── middleware/             # Express middleware
│   │   ├── database.js        # Database status middleware
│   │   ├── requestId.js       # Request ID middleware
│   │   └── validation.js      # Input validation middleware
│   ├── models/                 # MongoDB models
│   │   └── Order.js           # Order model
│   ├── routes/                 # API routes
│   │   └── orders.js          # Order routes
│   ├── utils/                  # Utility functions
│   │   ├── emailService.js    # Email service
│   │   ├── logger.js          # Custom logger
│   │   └── rateLimiter.js     # Rate limiting
│   ├── server.js              # Express server entry point
│   ├── test-email.js          # Email testing script
│   ├── package.json           # Backend dependencies
│   └── Procfile               # Process file for deployment
│
├── frontend/                   # Frontend React application
│   ├── public/                # Static assets
│   │   ├── images/            # Image files
│   │   ├── videos/            # Video files
│   │   └── robots.txt         # SEO robots file
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── CartIcon.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── OptimizedImage.jsx
│   │   │   ├── Sadya.jsx
│   │   │   ├── Shopping.jsx
│   │   │   ├── SkeletonLoader.jsx
│   │   │   ├── Toast.jsx
│   │   │   ├── UnderDevelopment.jsx
│   │   │   └── VideoSection.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── ComingSoon.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Shopping.jsx
│   │   ├── context/           # React Context
│   │   │   └── CartContext.jsx
│   │   ├── hooks/             # Custom hooks
│   │   │   └── useToast.js
│   │   ├── config/            # Configuration
│   │   │   ├── api.js
│   │   │   └── app.js
│   │   ├── constants/         # Constants
│   │   │   └── headings.js
│   │   ├── data/              # Static data
│   │   │   ├── events.js
│   │   │   ├── sadyaDishes.js
│   │   │   └── shoppingItems.js
│   │   ├── utils/             # Utility functions
│   │   │   ├── price.js
│   │   │   ├── validation.js
│   │   │   └── __tests__/     # Unit tests
│   │   ├── test/              # Test setup
│   │   │   └── setup.js
│   │   ├── App.jsx            # Main App component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── scripts/               # Build scripts
│   │   ├── optimize-images.js
│   │   └── optimize-large-image.js
│   ├── index.html             # HTML template
│   ├── vite.config.js         # Vite configuration
│   ├── tailwind.config.js     # Tailwind configuration
│   ├── vitest.config.js       # Vitest configuration
│   ├── netlify.toml           # Netlify configuration
│   └── package.json           # Frontend dependencies
│
└── README.md                  # This file
```

---


## 🔒 Security

### Implemented Security Measures

- ✅ **CORS Protection**: Configured allowed origins
- ✅ **Rate Limiting**: API rate limiting to prevent abuse
- ✅ **Input Validation**: Client and server-side validation
- ✅ **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, CSP, HSTS
- ✅ **Environment Variables**: Sensitive data in environment variables
- ✅ **Error Sanitization**: Error messages don't expose sensitive information
- ✅ **HTTPS**: Enforced in production
- ✅ **Request ID**: Unique request IDs for tracking


---

