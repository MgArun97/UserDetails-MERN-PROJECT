
import mongoose from "mongoose"



const Connection=async ()=>{
    const URL='mongodb+srv://mgarun007:<password>@cluster0.9bz4cp6.mongodb.net/?retryWrites=true&w=majority';

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('database connected successfully');
    }catch(error){
        console.log("Error while connecting database",error);
    }
}

export default Connection;
