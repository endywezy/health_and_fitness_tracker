# Instructions on how to get started with your backend project 

## Using Ubuntu 18.04 LTS and Node.js (version 12.x.x). 

This cover the necessary installations, how to run the project, and how to test 

# Health and Fitness Tracker Backend Only

This is the backend for the Health and Fitness Tracker application built using Node.js and Express. It connects to a MongoDB database to manage user authentication and data.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 12.x.x)
- **npm** (Node package manager)
- **MongoDB** (for the database)

### Installation Steps

1. **Install Node.js and npm**

   If you don't have Node.js installed, you can use the following commands:

   ```bash
   sudo apt update
   sudo apt install nodejs
   sudo apt install npm


2. Check if Node.js is installed correctly:

      ```bash
      node -v

This should return the version number. Make sure it's version 12.x.x.

Install MongoDB

  - To install MongoDB on Ubuntu 18.04, follow these steps:

      ```bash
      sudo apt update
      sudo apt install -y mongodb

  - Start the MongoDB service:

      ```bash
      sudo systemctl start mongodb

  - Enable MongoDB to start on boot:

      ```bash
      sudo systemctl enable mongodb

  - Verify that MongoDB is running:

      ```bash
      sudo systemctl status mongodb


Clone the repository containing the backend code:


      git clone https://github.com/endywezy/health_and_fitness_tracker.git
      
      cd health_and_fitness_tracker


Install Dependencies

  -  Navigate to your project directory and install the required npm packages:

      ```bash
      npm install


Configure Environment Variables
Create a .env file in the root of the project directory and add your MongoDB connection string and JWT secret. 

- For example:

      Copy
      MONGO_URI=mongodb://localhost:27017/health_tracker
      JWT_SECRET=your_jwt_secret


Running the Application

  - Start the application by running:

      ```bash
      node app.js
      
      The server should start, and you'll see a message indicating that it's running on the specified port (default is 3002).

Testing the API

  - You can use curl, Postman, or any API testing tool to test the API endpoints.



Test GET Request

**To retrieve the welcome message:**

      curl -X GET http://localhost:3002/api/


To get all users:

      
      curl -X GET http://localhost:3002/api/users

To register a new user:

      curl -X POST http://localhost:3002/api/register -H "Content-Type: application/json" -d '{"email":"test@example.com", "password":"yourpassword"}'


To login:

      curl -X POST http://localhost:3002/api/login -H "Content-Type: application/json" -d '{"email":"test@example.com", "password":"yourpassword"}'


To update a user by ID:

      curl -X PUT http://localhost:3002/api/users/<user_id> -H "Content-Type: application/json" -d '{"email":"newemail@example.com", "password":"newpassword"}'


To delete a user by ID:

      - curl -X DELETE http://localhost:3002/api/users/<user_id>


To get a user by ID:

      curl -X GET http://localhost:3002/api/users/<user_id>


Conclusion
You should now be able to run the Health and Fitness Tracker backend and test various API endpoints. Make sure to check the console for any errors during the process.

### Notes

- Update the placeholder `<user_id>` with actual user IDs when testing PUT and DELETE requests.
- Ensure your MongoDB server is running before you start your application.

