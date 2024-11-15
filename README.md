# Contact Management - Mini Feature of a CRM

## Project Overview
The **Contact Management System** is a simple web application that serves as a mini feature of a Customer Relationship Management (CRM) system. The app allows users to efficiently manage customer contact information with the ability to **add**, **view**, **edit**, and **delete** contacts. 

This project was built using the following technologies:
- **Frontend**: ReactJS, Material UI (MUI), Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB (or any database of your choice)
- **State Management**: React hooks (`useState`, `useEffect`)

## Features
- **Add New Contacts**: Users can add a new contact with essential details such as first name, last name, email, phone number, company, and job title.
- **View Contacts**: Displays contacts in a **table format** with sorting and pagination to easily navigate through large lists.
- **Edit Contacts**: Users can update existing contact details.
- **Delete Contacts**: Users can remove outdated or duplicate contacts from the system.
  
## Technologies Used
- **Frontend**: ReactJS, Material UI (MUI)
- **Backend**: Node.js, Express
- **Database**: MongoDB (alternatively MySQL/PostgreSQL)
- **API**: RESTful API using Express
- **State Management**: React hooks (`useState`, `useEffect`)

## Installation and Setup

### Prerequisites
To run this project locally, make sure you have the following installed:
- **Node.js**: (v14 or above)
- **MongoDB**: Use MongoDB locally or set up a **MongoDB Atlas** cluster for cloud hosting.
  
### Steps to Set Up

1. **Clone the Repository**:
   First, clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/contact-management.git
   cd contact-management
   Install Dependencies:

For Frontend (React): Navigate to the client directory and install the dependencies:

cd client
npm install
For Backend (Node.js): Navigate to the server directory and install the backend dependencies:

cd server
npm install
Database Setup:

If you're using MongoDB, ensure it's running on your local machine, or use a MongoDB Atlas cloud database. Modify the connection string in the backend config (e.g., server/config/db.js).
For MySQL/PostgreSQL, set up the database and modify the DB configuration files as per your database setup.
Running the Application:

Start the Backend (Node.js): Navigate to the server directory and run the following:

npm start
The backend will run on http://localhost:5000.

Start the Frontend (React): Navigate to the client directory and run the following:

npm start
The frontend will run on http://localhost:3000.

Accessing the Application: Once both the frontend and backend servers are running, visit http://localhost:3000 in your browser. The frontend will interact with the backend on http://localhost:5000.

Database Schema
For MongoDB, the schema for storing contact details looks like this:
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  jobTitle: {
    type: String,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
API Endpoints
1. GET /contacts:
Fetches all contacts from the database.
Response: A list of all contact objects.
2. POST /contacts:
Adds a new contact to the database.
Body: Contact details (e.g., first name, last name, email, etc.)
3. PUT /contacts/
:
Updates the details of a specific contact.
URL Parameter: Contact ID
Body: Updated contact details.
4. DELETE /contacts/
:
Deletes a contact from the database.
URL Parameter: Contact ID
Challenges and Solutions
1. Handling Asynchronous Operations with Axios:
Challenge: Handling asynchronous requests between the frontend and backend, specifically managing errors when making API requests.
Solution: Utilized async/await with try/catch blocks in Axios calls to ensure smooth API communication and effective error handling.
2. Managing State Across Components:
Challenge: Managing contact data across multiple components, especially when dealing with forms and tables.
Solution: Used React hooks like useState for local state management and useEffect to fetch data asynchronously when the component mounts.
3. Database Integration:
Challenge: Initially, integrating the MongoDB database and setting up models/schema in the backend was tricky.
Solution: Leveraged Mongoose for schema-based modeling, and connected to a cloud-based MongoDB instance via MongoDB Atlas to avoid local setup issues.
Future Improvements
Authentication: Add user authentication using JWT (JSON Web Tokens) to restrict access to authorized users only.
Search Functionality: Implement a search bar to allow users to search for contacts by name, email, or company.
Contact Grouping: Allow users to categorize contacts into groups (e.g., by industry or region).
UI Enhancements: Improve the UI by adding more interactive features and better responsive design.


