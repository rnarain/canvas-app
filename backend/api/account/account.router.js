const router = require("express").Router();
const passport = require('passport');

const {
  login,
} = require("./account.controller");

let checkAuth = passport.authenticate('jwt', { session: false });
router.post("/login", login);
module.exports = router;