# Food Delivery Application -MERN Stack🍟

## Description
This project is developed to create a food ordering application.<b> MERN stack (MongoDB, Express.js, React, Node.js) , JWT, Stripe, Axios, React-Toastify, Bcrypt, Multer, Validator, React Router. </b> Customers can choose from various food categories, add them to their carts, and complete their orders. Administrators can add, list, and manage orders.

<br>

## Installation
```bash
git clone https://github.com/mehmetpektass/Food-Delivery-MERN-Stack.git

```
```
cd backend
npm install

cd client
npm install

cd admin
npm install
```
```
cd backend
node server.js
```
```
cd admin
npm run dev

cd client
npm run dev
```
<br>

## Features
### For Customers:

* Browse Menu: Customers can explore a variety of food items available on the platform.
* Search Functionality: Search for specific food items by name or category.
* View Details: Customers can view detailed information about each * food item, including its name, description, price, and image.
* Add to Cart: Add desired food items to the cart for later checkout.
* Place Orders: Customers can place orders by providing necessary details such as name, address, contact information, and payment details.


### For Administrators:

* Add New Food Items: Administrators can add new food items to the platform, including their name, description, price, category, and image.
* List Food Items: View a comprehensive list of all food items available on the platform, along with their details.
* Manage Orders: Administrators can view and manage incoming orders, including order details, customer information, and order status.
* Update Food Items: Modify existing food items' details, such as name, description, price, and category.
* Remove Food Items: Remove food items from the platform that are no longer available or in stock.

<br>

## Technologies Used
### Backend: 
* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* JWT (JSON Web Tokens)
* Bcrypt
* Stripe
* Validator

### Frontend: 
* React.js
* React Router
* React Context API: 
* Axios:
* React-Toastify:
<br>

<br>

## API Endpoints
### Backend:
##### Food Endpoints:
* POST /api/food/add: Add a new food item to the database.
* GET /api/food/list: Retrieve a list of all food items from the database.
* POST /api/food/remove: Remove a food item from the database.

##### Food Endpoints:
* POST /api/auth/register: Register a new user account.
* POST /api/auth/login: Log in an existing user and generate a JWT token for authentication.
* POST /api/auth/logout: Log out the currently authenticated user and invalidate the JWT token.



<br>

## Contributing 🚀
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.



