import mongoose from 'mongoose'

// 1.connect or create new database.
mongoose.connect('mongodb://localhost:27017/SongDataBase')
    .then(()=> console.log("Node connected to mongoDB(SongDataBase)."))
    .catch((err)=> console.log("Error: ",err))

// 2.defined schema of a model|collection
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

// 3.create mongodb_collection mapping mongoose_model with respective mongoose_schema.
const songModel = new mongoose.model("songCollection", songSchema);

// 4.Save the instanced document into database-collection.
const getSongsCount = async () => {
    try{
        const response = await songModel
        .find({views: {$gt: 73000}})
        .countDocuments()
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSortSongs_1 = async () => {
    try{
        const response = await songModel
        .find()
        .sort()
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSortSongs_2 = async () => {
    try{
        const response = await songModel
        .find({views: {$gt: 73000}})
        .sort()
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSortSongs_3 = async () => {
    try{
        const response = await songModel
        .find()
        .sort("title: 1")
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSortSongs_4 = async () => {
    try{
        const response = await songModel
        .find()
        .select({title:1})
        .sort({title: 1})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSortSongs_5 = async () => {
    try{
        const response = await songModel
        .find()
        .select({title:1})
        .sort ({title: -1})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

// getSongsCount()
// getSortSongs_1()
// getSortSongs_2()
// getSortSongs_3()
// getSortSongs_4()
getSortSongs_5()