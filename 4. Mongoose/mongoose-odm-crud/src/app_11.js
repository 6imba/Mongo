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
const getSongsFilter_1 = async () => {
    try{
        const response = await songModel.find({$or: [{views: 73000},{singer: "Sakira"}]})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_2 = async () => {
    try{
        const response = await songModel.find({$and: [{views: 73000},{singer: "Swoopil Sharma"}]})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_3 = async () => {
    try{
        const response = await songModel.find({$and: [{views: {$gt: 73000}},{singer: "Swoopil Sharma"}]})
        console.log(response)
        console.log(response.length)
    }
    catch(error){
        console.log(error)
    }
}

// getSongsFilter_1()
// getSongsFilter_2()
getSongsFilter_3()