# uom-login-api
UOM Assestment ServerSide Web Development
# Express API with SQLite

This is a simple Express API with SQLite database for managing customer information.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server

## Endpoints

### GET /login

Retrieves all customer information from the database.

### POST /login

Adds a new customer to the database. Requires a JSON body with the following fields:
- name (string, min 3, max 30, required)
- address (string, min 5, max 35)
- email (string, valid email format)
- dateOfBirth (date)
- gender (string)
- age (number, min 16, max 120)
- cardHolderName (string, min 6)
- CardHoldNo (number, 12 digits)
- exp (string)
- cvv (number, 3 digits)
- timeStamp (string)

### PUT /login/:customerid

Updates an existing customer in the database. Requires a JSON body with the same fields as the POST request, plus `customerid` to specify which customer to update.

### DELETE /login/delete/:customerid

Deletes a customer from the database based on the `customerid` parameter.

## Usage

You can use this API to manage customer information in a simple database. Make sure to validate input before making requests to the API.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

