var express = require("express");
var app = express();
var db = require("./db.js");
exports.app = app;
var bodyParser = require("body-parser");
const { request, response } = require("express");
const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  address: Joi.string().min(5).max(35),
  email: Joi.string().email().messages({
    "string.email": "Enter a Valid email Address",
  }),
  dateOfBirth: Joi.date(),
  gender: Joi.string(),
  age: Joi.number().min(16).max(120),
  cardHolderName: Joi.string().min(6),
  CardHoldNo: Joi.number()
    .integer()
    .required()
    .min(100000000000)
    .max(999999999999)
    .messages({
      "number.min": "Card Number Must Have 12 Digits",
      "number.max": "Card Number Must Have 12 Digits",
    }),
  exp: Joi.string(),
  cvv: Joi.number().min(1).max(999).message({
    "number.min": "CSV Must Have 3 Digits",
    "number.min": "CSV Must Have 3 Digits",
  }),
  timeStamp: Joi.string(),
});
exports.schema = schema;

app.use(bodyParser.json());

let HTTP_PORT = 1280;

app.listen(HTTP_PORT, () => {
  console.log("Server is running on %PORT%".replace("%PORT%", HTTP_PORT));
});
// get

app.get("/login", (req, res, next) => {
  try {
    var sqlq = "SELECT * FROM customer";
    var params = [];
    db.all(sqlq, params, (err, rows) => {
      if (err) {
        err.status(400).json({ error: "bad request" });
        return;
      }

      res.json({
        message: "successfully rendered",
        data: rows,
      });
    });
  } catch (E) {
    res.status(400).send(E);
  }
});

// post

app.post("/login", (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    const {
      name,
      address,
      email,
      dateOfBirth,
      gender,
      age,
      cardHolderName,
      CardHoldNo,
      exp,
      cvv,
      timeStamp,
    } = req.body;

    var sql =
      "INSERT INTO customer (name,address,email,dateOfBirth,gender,age,cardHolderName,CardHoldNo,exp,cvv,timeStamp) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    var params = [
      name,
      address,
      email,
      dateOfBirth,
      gender,
      age,
      cardHolderName,
      CardHoldNo,
      exp,
      cvv,
      timeStamp,
    ];
  }

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: "bad request" });
      throw err;
    } else {
      let msg = "customer " + params[0] + " has created";
      res.status(201).json({ message: msg, data: rows });
    }
  });
});

//update

app.put("/login/", (req, res, next) => {
  try {
    const {
      name,
      address,
      email,
      dateOfBirth,
      gender,
      age,
      cardHolderName,
      CardHoldNo,
      exp,
      cvv,
      timeStamp,
      customerid,
    } = req.body;
    db.run(
      "UPDATE customer SET name=?,address=?,email=?,dateOfBirth=?,gender=?,age=?,cardHolderName=?,CardHoldNo = ?,exp = ?,cvv = ?,timeStamp = ? WHERE customerid = ? ",
      [
        name,
        address,
        email,
        dateOfBirth,
        gender,
        age,
        cardHolderName,
        CardHoldNo,
        exp,
        cvv,
        timeStamp,
        customerid,
      ],
      function (err) {
        if (err) {
          res.status(400).json({
            error: "Bad Request",
          });
          return;
        }
        res.status(200).json({
          message: "successfully updated",
          updated: this.changes,
        });
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete

app.delete("/login/delete/:customerid", function (req, res) {
  try {
    let customer_id = req.params.customerid;
    db.run(
      "DELETE FROM customer WHERE customerid=?",
      customer_id,
      function (err) {
        if (err) {
          res.status(400).json({ error: "Bad Request", message: err.message });
          return;
        }
        res
          .status(200)
          .json({ message: "Successfully deleted", rows: this.changes });
      }
    );
  } catch (e) {
    res.status(400).send(e);
  }
});
