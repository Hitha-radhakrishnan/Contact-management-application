const express=require('express'); 
const router=express.Router();
const Contact=require('../models/schema');
const bodyParser=require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended:true 
}));


router.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body); 
        const newContact = await contact.save(); 
        console.log('New contact saved:', newContact); 
        res.status(201).json(newContact); 
    } catch (error) {
        console.error('Error saving contact:', error); 
        res.status(400).json({ message: error.message }); 
    }
});

router.get('/contact',async(req,res)=>{
    try{
        const contacts=await Contact.find();
        res.json(contacts);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});


router.get('/contact/:id',async(req,res)=>{
    try{
        const contact=await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/contact/:id',async(req,res)=>{
    try{
        const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedContact);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});

router.delete('/contact/:id',async(req,res)=>{
    try{
        await Contact.findByIdAndDelete(req.params.id);
        res.json({message:'Contact Deleted'});
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
});


module.exports=router;
