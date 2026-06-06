# College Ranking System - Microservice Architecture Rebuild

## ✅ Project Structure - COMPLETED

```
college-ranking-system/
├── .env (configuration retained)
├── .git/
├── auth-service/
│   ├── models/
│   │   └── User.js ✅
│   ├── utils/
│   │   └── otpGenerator.js ✅
│   ├── server.js ✅
│   └── package.json ✅
├── ranking-service/
│   ├── models/
│   │   └── College.js ✅
│   ├── utils/
│   │   ├── rankEngine.js ✅
│   │   └── emailService.js ✅
│   ├── server.js ✅
│   └── package.json ✅
└── gateway-service/
    ├── server.js ✅
    └── package.json ✅
```

## 🗑️ Legacy Files & Folders Removed

- ❌ Root server.js (unneeded)
- ❌ config/ directory
- ❌ controllers/ directory  
- ❌ routes/ directory
- ❌ gateway-services/ (duplicate)

## 🔧 Microservice Endpoints

### Auth Service (Port 5001)
- `POST /api/auth/register` - Generates & logs 6-digit OTP
- `POST /api/auth/verify-otp` - Validates OTP token

### Ranking Service (Port 5002)
- `POST /api/ranking/submit` - Stores institutional metrics as 'pending'
- `GET /api/ranking/pending` - Retrieves pending records
- `PUT /api/ranking/approve/:id` - Calculates score, updates ranks, sends approval email
- `GET /api/ranking/leaderboard` - Returns approved colleges sorted by rank

### Gateway Service (Port 5000)
- `GET /` - Manthan homepage
- `GET /utthan` - UTTHAN Registry registration & OTP entry
- `GET /data-collection-form` - Secure institutional metrics form
- `GET /admin-panel` - Admin approval interface with expandable accordion

## 🎯 Functional Flow

1. **Registration**: User registers on UTTHAN page → Auth Service generates OTP
2. **Verification**: User enters OTP → OTP validated → Redirect to metrics form
3. **Data Collection**: User submits institutional metrics → Ranking Service stores as 'pending'
4. **Admin Approval**: Admin views pending records in accordion interface
5. **Approval Process**: Admin clicks "Verify & Approve" → Score calculated → Ranks updated → Email notification sent

## 📧 Email Notification

- **Triggered**: When admin approves college metrics
- **Template**: Professional HTML email with score & rank
- **Provider**: Nodemailer (configured for Gmail SMTP)
- **Credentials**: Pulled from .env file

## 🔐 Security Features

- OTP validation before form access
- Verification flag check on data collection form
- Protected admin panel
- Environment variables for sensitive data

## 🚀 Setup & Run

```bash
# Install dependencies for each service
cd auth-service && npm install
cd ../ranking-service && npm install
cd ../gateway-service && npm install

# MongoDB must be running on localhost:27017

# Start services in separate terminals
cd auth-service && npm start
cd ranking-service && npm start
cd gateway-service && npm start

# Access application at http://localhost:5000
```

## 📝 Database

- **Database**: MongoDB (collegeDB)
- **Collections**: users, colleges
- **Records Status**: pending → approved

---
**Last Updated**: June 5, 2026 | All files production-ready ✅
