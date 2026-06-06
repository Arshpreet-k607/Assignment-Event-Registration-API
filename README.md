# Event Registration API

This is a simple backend API built with Node.js, Express, TypeScript, Joi, and Firebase Firestore.  
It lets you create, read, update, and delete events. All event data is stored in Firestore, and all requests are validated using Joi.

## Features
- Create, read, update, delete events
- Joi validation for all inputs
- Firestore database connection
- Clean folder structure (routes, controllers, services, repositories)
- Jest tests for validation and services

## How to Run
1. Install dependencies:
   npm install

2. Start the server:
   npm run dev

The API runs at:
http://localhost:3000

## Firebase Setup
- Create a Firebase project
- Enable Firestore
- Download the Admin SDK key
- Rename it to: firebase-service-account.json
- Place it in the project root
- Install Firebase Admin:
  npm install firebase-admin

## Main Endpoints
GET    /api/v1/events/test  
POST   /api/v1/events  
GET    /api/v1/events  
GET    /api/v1/events/:id  
PUT    /api/v1/events/:id  
DELETE /api/v1/events/:id  

## Tests
Run tests with:
npm test

## Screenshots (Required)

10 Screenshots showing:
- CRUD operations
- Validation errors
- Test results

## Collection name
- M3_0401570

## Author
Arshpreet Kaur
