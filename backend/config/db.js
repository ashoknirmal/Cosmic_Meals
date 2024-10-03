import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashokstack:ashok3182004@cluster0.uo5sr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}