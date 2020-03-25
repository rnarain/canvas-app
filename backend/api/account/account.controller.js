const {
  createAccount,
  login,
} = require("./account.service");

const jwt = require('jsonwebtoken');
const { secret } = require('../../helperFunctions/config');


const { hashSync, genSaltSync, compareSync } = require("bcrypt");
//const { sign } = require("jsonwebtoken");
const url = require('url');
module.exports = {
  createAccount: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    createAccount(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          success: 0,
          message: err
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
        message: "Sign up Successful"
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    login(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database error"
        });
      }
      else {
        if (!results) {
          return res.status(400).json({
            success: 0,
            message: "No such user found"
          });
        }

        //compare encrypted passwords
        if (compareSync(body.password, results.password)) {
          const payload = { _id: results._id };
          const token = jwt.sign(payload, secret, {
            expiresIn: 1008000
          });
          return res.status(200).json({
            success: 1,
            data: token,
            message: "Signin Successful"
          });
        }
        else {
          return res.status(400).json({
            success: 0,
            message: "Password incorrect"
          });
        }
      }
    });
  },
}