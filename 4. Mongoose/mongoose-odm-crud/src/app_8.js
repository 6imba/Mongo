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
const newSongDocument_1 = new songModel({
    title: "Hidne manche ladxa",
    views: 230000000,
    singer: "Swoopil Sharma",
    trending: false
})
const newSongDocument_2 = new songModel({
    title: "Balakari lai fhaside",
    views: 1000000000,
    singer: "Swoopil Sharma",
    trending: false
})
const newSongDocument_3 = new songModel({
    title: "Kasto ho you maya vanne chiz",
    views: 73000,
    singer: "Swoopil Sharma",
    trending: true
})

const newSongDocument_4 = new songModel({
    title: "Pahulo najar ma nai timi",
    views: 170000000,
    singer: "Akash Sunar",
    trending: true
})

const newSongDocument_5 = new songModel({
    title: "Kasari vanu",
    views: 8000000,
    singer: "Sopna Suman",
    trending: true
})

const newSongDocument_6 = new songModel({
    title: "Despasito",
    views: 17700000000,
    singer: "Ronaldo",
    trending: true
})

const newSongDocument_7 = new songModel({
    title: "Waka waka",
    views: 40056,
    singer: "Sakira",
    trending: false
})

//5. Save the instanced document into database-collection.
const insertDocument = async () => {
    try{
        const response = await songModel.insertMany([newSongDocument_1,newSongDocument_2,newSongDocument_3,newSongDocument_4,newSongDocument_5,newSongDocument_6,newSongDocument_7])
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

insertDocument()