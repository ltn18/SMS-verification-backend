# SMS Verification Backend
## Backend's Structure
```
├── _config.yml
├── _drafts
│   ├── begin-with-the-crazy-ideas.textile
│   └── on-simplicity-in-technology.markdown
├── _includes
│   ├── footer.html
│   └── header.html
├── _layouts
│   ├── default.html
│   └── post.html
├── _posts
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
│   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
│   └── members.yml
├── _site
└── index.html
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

