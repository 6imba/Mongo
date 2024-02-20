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
const songModel = new mongoose.model("songCollection", songSchema);

// instance new document with mongoose_model and save it in database.
const newSongDocument = new songModel({
    title: "Pahulo najar ma nai timi",
    views: 170000000,
    singer: "Akash Sunar",
    trending: true
})

//5. Save the instanced document into database-collection.
newSongDocument.save()
