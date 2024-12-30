const express=require('express'); 
const router=express.Router();
const schema=require('../models/schema');
const bodyParser=require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended:true 
}));


router.post('/contact',async(req,res)=>{
    const Contact=new schema({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Address:req.body.Address
    });
    try{
        const newContact=await Contact.save();
        res.status(201).json(newContact);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});

router.get('/contact',async(req,res)=>{
    try{
        const Contacts=await schema.find();
        res.json(Contacts);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});

router.get('/contact/:id',async(req,res)=>{
    try{
        const Contacts=await schema.findById(req.params.id);
        res.json(Contacts);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});

router.put('/contact/:id',async(req,res)=>{
    try{
        const updatedContact=await schema.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedContact);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});

router.delete('/contact/:id',async(req,res)=>{
    try{
        await schema.findByIdAndDelete(req.params.id);
        res.json({message:'Contact Deleted'});
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});


module.exports=router;
