// 1. Al about including/importing/requireing mongoose module/library/package in this file.
const mongooseObj = require('mongoose')
// console.log(mongooseObj)
// console.log(typeof(mongooseObj))
// console.log(Object.getOwnPropertyNames(mongooseObj)); // return all properties&methods of object:mongooseObj
// console.log(Object.getOwnPropertyNames(mongooseObj).filter((m) =>typeof mongooseObj[m] === 'function')); // return only methods of object:mongooseObj



//2. Established Connection to mongoDB with this node file using mongoose:
mongooseObj.connect('mongodb://localhost/myDataBase')
// console.log(mongooseObj1.connect('mongodb://localhost/myDataBase')) //returns promises



// 3. Open the connection:
mongooseObj.connection
    .once('open', function(){
        console.log("Connection has been established!");
    })
    .on('error', function(myError){
        console.log('Error while Connection:', myError)
    })

// node .\1.connection.js
// nodemon .\1.connection.js
