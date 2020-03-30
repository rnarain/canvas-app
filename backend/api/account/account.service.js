const Account = require("../../Models/AccountModel");

module.exports = {
  login: (data, callBack) => {
    Account.findOne({ email: data.email }, (error, user) => {
      if (error) {
        callBack(error);
      }
        return callBack(null, user);
    }
    );
  },
}
