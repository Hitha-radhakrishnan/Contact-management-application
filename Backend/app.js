const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DB_URI)
    .then(() =>
      console.log('Successfully connected to the database'))
    .catch((error) => 
      console.error('Database connection failed',error));

    const contactRouter=require('./routes/contactRoutes');
    app.use('/api',contactRouter);


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});