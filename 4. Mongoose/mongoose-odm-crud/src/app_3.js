import mongoose from 'mongoose'

// connect or create new database.
mongoose.connect('mongodb://localhost:27017/SongDataBase')
    .then(()=> console.log("Node connected to mongoDB(SongDataBase)."))
    .catch((err)=> console.log("Error: ",err))

// defined schema of a model|collection
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    publish: {
        type: Date,
        default: Date.now
    },
    views: Number,
    singer: String,
    trending: Boolean
})

// create mongodb_collection mapping mongoose_model with respective mongoose_schema.
const songModel = new mongoose.model("songCollection", songSchema); // here songCollection is name of collection

// mongoose_model provides an interface to the database collection, for creating,querying,updating,deleting, records|documents.
// Using mongoose_model we can easily perform CURD operation on MongoDB with node/express.
// we instantiate/create new collection using mongoose_model.
