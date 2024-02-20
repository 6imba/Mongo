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
const deleteSongsDocument_1 = async (sid) => {
    try{
        const response = await songModel.deleteOne({_id: sid})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
const deleteSongsDocument_2 = async (_id) => {
    try{
        const response = await songModel.deleteMany({_id})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
const deleteSongsDocument_3 = async () => {
    try{
        const response = await songModel.deleteMany({views: {$gte: 10000}})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

// deleteSongsDocument_1("634ff68b7c3567c8d73b50b0")
// deleteSongsDocument_2("634ff68b7c3567c8d73b50b0")
// deleteSongsDocument_3()
