const mongooseObj = require('mongoose'); // returns mongoose object

mongooseObj.connect("mongodb://localhost:27017/mydatabasename") // returns a promise: means provide output in future // deprecation error
    .then(() => console.log("Connection established !"))
    .catch((error) => console.log("Connection fails !!! :", error))

