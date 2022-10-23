import mongoose from "mongoose"

const connection = async(username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.n9w10yb.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('Database connected ');

    } catch (error) {
        console.log('Error  while is connecting database ',error);
    }

}
export default connection;