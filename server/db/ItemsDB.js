const mongoose=require("mongoose");

const itemS=mongoose.Schema({
    name:String,
    contact:Number,
    itemName:String,
    date:Date,
    location:String,
    image:String,
    desc:String
});

module.exports=mongoose.model("Item",itemS);