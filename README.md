# SMS Verification Backend
## Backend's Structure
```
├── controllers
│   ├── userController.js
├── models
│   ├── user.js
├── routes
│   ├── userRoutes.js
├── services
│   ├── generate-code.js
│   └── send-sms.js
├── .gitignore
├── README.md
├── config.js
├── db.js
├── index.js
├── package-lock.json
└── package.json
```
## How to run
### Run in terminal: 
- Clone the repository: `git clone git@github.com:ltn18/SMS-verification-backend.git`
- Install node_modules/necessary packages: `npm i`
- In case some of the packages are lost/not installed, run: `npm i body-parser cors dotenv express firebase twilio nodemon`
### Setting up .env file:
- Create a .env file of the structure down below:
```
NODE_ENV=production
#express server config

PORT=8080
HOST=localhost
HOST_URL=http://localhost:8080


#firebase database config

API_KEY=
AUTH_DOMAIN=
DATABASE_URL=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=

#twilio config

ACCOUNT_SID=
AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
MESSAGING_SERVICE_SID=
```
### Run Backend
- To start the backend/running server, run in your terminal: `nodemon index.js`

