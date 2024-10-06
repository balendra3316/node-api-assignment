 #### Node API Assignment
This is a simple Node.js project that demonstrates how to create a basic REST API using Express and Mongoose. The API allows you to retrieve, create, and update user data stored in a MongoDB database.

   ### Features
Create user data using the POST method.
Retrieve user data using the GET method.
Update user data using the PUT method.

### Technologies Used
Node.js
Express.js
Mongoose (for MongoDB)
MongoDB (as the database)
Postman (for API testing)

### Installation and Setup
  Follow these steps to get the project running on your local machine:

1. Clone the Repository
git clone <URl>
2. Navigate to the Project Directory
cd node-api-assignment
3. Install Dependencies
Make sure you have Node.js installed on your machine. Then, install the required dependencies:
npm install
4. Create .env File
Create a .env file in the root directory to store your environment variables:
MONGO_URI=mongodb://0.0.0.0:27017/Apitest_db
PORT=5000

5. Run the Server
Run the server locally with the following command:
npm start

This will start the server on http://localhost:5000. You should see the message Server is running on port 5000 in the terminal.


  #### Testing the API using Postman
You can test this API locally using Postman. Follow the instructions below:

## 1. Install Postman
If you haven't already installed Postman, you can download it from Postman's official site.

## 2. Test the GET Request
Open Postman and create a GET request.
Set the URL to:
http://localhost:5000/api/users
Press Send. You should receive a list of users in the response.

## 3. Test the POST Request
In Postman, create a POST request.
Set the URL to:
http://localhost:5000/api/users

Go to the Body tab, select raw, and choose JSON.
Enter the following JSON to create a new user:
{
  "name": "Balendra Singh Parihar",
  "email": "ballu.doe@example.com",
  "age": 23
}
Press Send. You should receive a confirmation with the newly created user in the response.

 ## 4. Test the PUT Request
In Postman, create a PUT request.
Set the URL to the specific user's ID. For example:
http://localhost:5000/api/users/67025068fbd349fc2feb6c32

Go to the Body tab, select raw, and choose JSON.
Enter the following JSON to update the user's details:
json
Copy code
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "age": 30
}
Press Send. You should receive a confirmation with the updated user data in the response.