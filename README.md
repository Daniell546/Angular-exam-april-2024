# Softuni angular project defence

## **Perfume Store Web Application**

***This web application is an online perfume store built using Angular for the front-end and Node.js, Express.js, MongoDB (with Mongoose), JWT, and Bcrypt for the back-end. It allows users to create and browse perfumes, register or log in, manage their profiles, add perfumes to their cart, and make purchases.***


### 1. Features

    Dashboard: Displays a collection of featured perfumes.

    Search: Allows users to search for perfumes by brand.

    Authentication: Users can register,log in or log out securely using JWT, cookie based, authentication.

    User Profile: Authenticated users can view and edit their profile information, including email, phone number, and password. It also displays user's own perfume posts.

    Perfume Management: Authenticated users can create, edit, and delete their own posters, which contain perfume details such as brand, model, amount of stock, image URL, and short description.

    Cart: Authenticated users can add perfumes to their cart, view the total price based on the quantity and price of the selected perfumes, and press to checkout button.

### 2. Technologies Used

    -Front-end:
        Angular: A front-end web application framework.
        HTML/CSS: Markup and styling for the user interface(including svg tags).
        TypeScript: Programming language for Angular.
        JWT Authentication: Secure user authentication using JSON Web Tokens.
        Angular animations: ngx-toastr
        Bootstrap or Material Design: UI framework for responsive design and styling.

    -Back-end:
        Node.js: JavaScript runtime for server-side development.
        Express.js: Web application framework for Node.js.
        MongoDB: NoSQL database for storing user information, perfume details, and cart items.
        Mongoose: MongoDB object modeling tool for Node.js.
        Bcrypt: Password hashing for secure authentication.

### 3. Installation 

    - Clone the repository: https://github.com/Daniell546/Angular-exam-april-2024.git
    - Open two terminals and navigate to the front-end(app) and to back-end(server):
        - cd ./app
        - cd ./server
    - Install dependencies for both the client and server:
        - run the command: npm i on both terminals
    - Run the project:
        - type ng serve in the app directory 
        - type npm start in the server directory
        - Open a web browser and navigate to http://localhost:4200 to view the application.

### 4. License

    This project is licensed under the MIT License - see the LICENSE file for details.

### 5. Acknowledgments

    This project was inspired by the need for an easy-to-use online perfume store.
    Thanks to Angular, Node.js, Express.js, and MongoDB for providing powerful tools for web development.