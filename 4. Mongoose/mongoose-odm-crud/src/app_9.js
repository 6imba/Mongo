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
const getAllDocument = async () => {
    try{
        const response = await songModel.find()
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getOneSwoopnilDocument = async () => {
    try{
        const response = await songModel.find({singer:"Swoopil Sharma"})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

const getOneSwoopnilDocumentFilter = async () => {
    try{
        const response = await songModel.find({singer:"Swoopil Sharma"}).select({publish:1,views:1,trending:1})
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

// getAllDocument()
// getOneSwoopnilDocument()
getOneSwoopnilDocumentFilter()


// # Summary:
// songModel
//  .find({singer:"Swoopil Sharma"})
//  .select({publish:1,views:1,trending:1})
//  .limit(1)