import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"eventplanningwithmahiz"})
    .then(()=>{
    console.log(`Data base connected to ${process.env.MONGO_URI}`);
}).catch(err=>{
    console.log("server lost connection at ",err);
});
}
export default dbConnection;
