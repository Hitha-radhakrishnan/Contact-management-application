const mongoose=require('mongoose');

const ContactSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Phone:{type:String,required:true},
    Address:{type:String,required:true}
});

module.exports=mongoose.model('schema',ContactSchema);