const mongoose =require('mongoose');
const colors = require("colors")

//function mongodb database connection
 const connectDb =async()=>{
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to database ${mongoose.connection.host}`.bgCyan)

}catch (error){
    console.log(" DB Error",error);
}
};
module.exports = connectDb;