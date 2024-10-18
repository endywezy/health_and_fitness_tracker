
To test your POST, GET, PUT, and DELETE requests, you can use tools like Postman, cURL, or HTTPie to send HTTP requests to your backend API.

Here’s how you can use each tool:

1. Using Postman (GUI tool)
Steps:
Install Postman: Download and install it from Postman.
Create a New Request: Open Postman and create a new request.
Choose Method: Select the HTTP method you want to test (e.g., POST, GET, DELETE, PUT).
Enter the URL: Add the URL for your API endpoints (e.g., http://localhost:3000/auth/signup for the signup route).
Example: Testing the POST (Signup)
Select POST from the dropdown.
Set the URL to http://localhost:3000/auth/signup.
Go to the Body tab, select raw and set it to JSON.
Add your request body, for example:
json
Copy code
{
  "username": "testuser",
  "password": "testpassword"
}
Click Send.
You should receive a response like:
json
Copy code
{
  "message": "User created"
}
Example: Testing the GET (Retrieve User Profile)
Select GET.
Set the URL to http://localhost:3000/auth/profile.
Go to the Headers tab, and add a key Authorization with your JWT token:
text
Copy code
Authorization: Bearer <your_jwt_token>
Click Send.
You should receive the user profile response.
Example: Testing the DELETE (Delete User)
Select DELETE.
Set the URL to http://localhost:3000/auth/delete.
Go to Headers and add the Authorization header as before.
Click Send.
You should receive a response like:
json
Copy code
{
  "message": "User deleted"
}
2. Using cURL (Command Line Tool)
You can use cURL from the command line to test your routes.

Example: POST Request for Signup
bash
Copy code
curl -X POST http://localhost:3000/auth/signup \
-H "Content-Type: application/json" \
-d '{"username": "testuser", "password": "testpassword"}'
Example: GET Request for User Profile
bash
Copy code
curl -X GET http://localhost:3000/auth/profile \
-H "Authorization: Bearer <your_jwt_token>"
Example: DELETE Request to Delete User
bash
Copy code
curl -X DELETE http://localhost:3000/auth/delete \
-H "Authorization: Bearer <your_jwt_token>"
3. Using HTTPie (Command Line Tool)
Similar to cURL, but easier to use.

Example: POST Request for Signup
bash
Copy code
http POST http://localhost:3000/auth/signup username=testuser password=testpassword
Example: GET Request for User Profile
bash
Copy code
http GET http://localhost:3000/auth/profile "Authorization: Bearer <your_jwt_token>"
Example: DELETE Request to Delete User
bash
Copy code
http DELETE http://localhost:3000/auth/delete "Authorization: Bearer <your_jwt_token>"
Steps Recap:
POST: Use this to create new resources (e.g., user signup, create exercise).
GET: Use this to retrieve resources (e.g., user profile, list of exercises).
PUT: Use this to update an existing resource (e.g., edit exercise details).
DELETE: Use this to delete a resource (e.g., delete user account or exercise).
By using any of these tools, you'll be able to fully test your backend routes and verify they work as expected! Let me know if you need help with specific routes or further details.