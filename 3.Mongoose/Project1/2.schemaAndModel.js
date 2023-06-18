const mongooseObj = require('mongoose'); // returns mongoose object

// 1.Creates Database or Activate existing Database & then establish the connect:
mongooseObj.connect("mongodb://localhost:27017/SongDataBase") // returns a promise: means provide output in future // deprecation error
    .then(() => console.log("Connection established !"))
    .catch((error) => console.log("Connection fails !!! :", error))

// 2.Define the structure of document in collection.
// Mongoose Schema:
const collectionSchema = new mongooseObj.Schema({
    name: {
        type: String,
        required: true
    },
    singer: String,
    view: Number,
    trend: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// 3.Create collection with name:PlayListCollection having above schene.
const myCollection = new mongooseObj.model("SongCollection", collectionSchema);

// Schema   ==> collectionSchema ==> object, instance ==> Schema({document key:vale pair})
// Collection ==> myCollection         ==> class            ==> model("className", document)

// We have defined database, schema, collecttion now all we need is to create/insert/add document.
// Later we can retrive, update, delete that document.


// 4.Create document. according to document schema // There are many ways to create a document but aysnc-await is best.
// const songDocument = new myCollection({
//     name: "Despacito",
//     singer: "Depak Bajrachraya",
//     view: 20000000,
//     trend: true
// })
// const songDocument = new myCollection({
//     name: "Sapana ko mayalu",
//     singer: "Milan Bajrachraya",
//     view: 9000000,
//     trend: false
// })

const songDocument = new myCollection({
    name: "Pahulo najar ma nai timi",
    singer: "Akash Sunar",
    view: 170000000,
    trend: true
})


//5. Save the created documentObject-songDocument:
songDocument.save()

//6. now run this file.
















// const SongSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     genres: String,
//     publish: {
//       type: Date,
//       default: Date.now
//     },
//     nepali: Boolean,
//     singers: Array,
//     duration: String,
//     products:[{
//       product_name: {
//         type: String,
//         required: true
//       },
//       rate: {
//         type: Number,
//         required: true
//         }
//     }],
    // singer:[{
    //     name: {
    //     type: String,
    //     required: true
    //     },
    //     age: {
    //     type: Number,
    //     required: true
    //     }
    // }],
    // trending: Boolean
// })