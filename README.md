
## WanderOn Assessment


 - User Model: This model represents the structure of user data, including attributes like  email, password (hashed for security), and any other relevant information.

- Database Interaction: The Model interacts with the database to perform operations on user data. It ensures data integrity and security by handling tasks such as input validation and sanitization.

- Authentication: The Model handles user authentication by verifying credentials during login and generating secure session tokens upon successful authentication.

- Routing: The Controller defines routes for login and signup endpoints, mapping them to corresponding actions.

- Modularity: The  architecture promotes modularity by separating concerns. Each component is responsible for a specific aspect of the application, making it easier to understand, test, and maintain the codebase.

- Security: Security considerations, such as password hashing, input validation, and protection against common vulnerabilities are integral parts of the design to ensure the integrity and confidentiality of user data.

#### To run the application

Use the node version greater than 16

run the command Locally 
```http
   npm install
  
```

and than run 
```http
   npm start
  
```


Endpoint for Signup
```http
   http://localhost:8080/api/signup
  
```

Endpoint for Login
```http
   http://localhost:8080/api/login
  
```











