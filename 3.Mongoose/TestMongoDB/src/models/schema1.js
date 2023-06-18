const mongooseObj = require('mongoose');

const CollectionSchema = new mongooseObj.Schema({
    category_name: {
      type: String,
      required: true,
    },
    category_description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
    products:[{
      product_name: {
        type: String,
        required: true
      },
      rate: {
        type: Number,
        required: true
        }
    }]
})

const TestModel = new mongooseObj.model("TestCollection_1", CollectionSchema);
module.exports = TestModel;


// in mongoose schema defines the structure of document
// schema helps to write mongodb validation.
// schema helps to get default values,validators.