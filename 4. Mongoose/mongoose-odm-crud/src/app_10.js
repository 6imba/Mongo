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
        const response = await songModel.find({views: 7300}).select({views:1,trending:1})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_2 = async () => {
    try{
        const response = await songModel.find({views: {$gt: 8000000}}).select({views:1,trending:1}) //$gt comparison operator
        console.log(response)
        console.log(response.length)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_3 = async () => {
    try{
        const response = await songModel.find({views: {$gte: 8000000}}).select({views:1,trending:1}) //$gt comparison operator
        console.log(response)
        console.log(response.length)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_4 = async () => {
    try{
        const response = await songModel.find({views: {$lt: 8000000}}).select({views:1,trending:1}) //$gt comparison operator
        console.log(response)
        console.log(response.length)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_5 = async () => {
    try{
        const response = await songModel.find({views: {$lte: 8000000}}).select({views:1,trending:1}) //$gt comparison operator
        console.log(response)
        console.log(response.length)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_6 = async () => {
    try{
        const response = await songModel.find({singer: {$in : ["Akash Sunar","Sopna Suman"]}}) //$gt comparison operator
        console.log(response)
        console.log(response.length)
    }
    catch(error){
        console.log(error)
    }
}

const getSongsFilter_7 = async () => {
    try{
        const response = await songModel.find({singer: {$nin : ["Akash Sunar","Sopna Suman"]}}) //$gt comparison operator
        console.log(response)
        console.log(response.length)
    }
    catch(error){
        console.log(error)
    }
}

// getSongsFilter_1()
// getSongsFilter_2()
// getSongsFilter_3()
// getSongsFilter_4()
// getSongsFilter_5()
// getSongsFilter_6()
getSongsFilter_7()