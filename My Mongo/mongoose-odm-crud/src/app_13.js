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
const updateSongsDocument_1 = async (sid) => {
    try{
        const response = await songModel
        .updateOne({_id: sid}, {$set: {title: "Wakka Dikka", views: 10101010}})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const updateSongsDocument_2 = async (_id) => {
    try{
        const response = await songModel
        .updateOne({_id}, {$set: {title: "Wakka Dikka", views: 10101010}})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const updateSongsDocument_3 = async (_id) => {
    try{
        const response = await songModel
        .findByIdAndUpdate({_id}, {$set: {title: "Wakka Dikka", views: 10101010}})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const updateSongsDocument_4 = async (_id) => {
    try{
        const response = await songModel
        .findByIdAndUpdate({_id}, {$set: {title: "Wakka Dikka", views: 10101010}}, {new: true, useFindAndModify: false})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}


updateSongsDocument_1("634ff68b7c3567c8d73b50b6")
// updateSongsDocument_2("634ff68b7c3567c8d73b50b6")
// updateSongsDocument_3("634ff68b7c3567c8d73b50b6")
// updateSongsDocument_4("634ff68b7c3567c8d73b50b6")