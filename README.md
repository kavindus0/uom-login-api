# Node.js Express API with SQLite Database

This is a Node.js application that provides a RESTful API for managing customer data and includes SQLite database integration for storing product, customer, and supplier information.

## Features

- **CRUD Operations**: The API supports Create, Read, Update, and Delete operations for customer data.
- **SQLite Database**: The application uses SQLite as the database to store product, customer, and supplier information.
- **Express Framework**: The API is built using the Express framework for Node.js.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `node server.js`.

## Usage

- Use a tool like Postman to interact with the API endpoints for managing customer data.
- The API supports endpoints for creating, updating, and deleting customer records.

## Database Initialization

The `database.js` file contains the initialization script for the SQLite database. It creates tables for products, customers, and suppliers, and inserts initial data into the products and suppliers tables.

## API Routes

- `GET /customers`: Retrieve a list of all customers.
- `POST /customers`: Create a new customer record.
- `PUT /customers/:customerid`: Update an existing customer record.
- `DELETE /customers/:customerid`: Delete a customer record.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project makes use of the Express framework and SQLite database.
