const Account = require("../../Models/AccountModel");

module.exports = {
  createAccount: (data, callBack) => {
    var newAccount = new Account({
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: data.password,
      phone: null,
      dob: null,
      skills: null,
      careerObjective: null,
      profilePicURL: null,
      education: {
        college: data.college,
        yearOfPassing: data.yearOfPassing,
        major: data.major,
        yearOfStarting: null,
        gpa: 0,
        degreeType: null
      },
      experience: 
        {
          company: null,
          location: null,
          startDate: null,
          endDate: null,
          title: null,
          description: null
        }
    });

    Account.findOne({ email: data.email }, (error, user) => {
      if (error) {
        callBack(error);
      }
      if (user) {
        return callBack("User already exists");
      }
      else {
        newAccount.save((error, data) => {
          if (error) {
            callBack(error);
          }
          console.log(data);
          return callBack(null, data);
        })
      }
    })
  },

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
