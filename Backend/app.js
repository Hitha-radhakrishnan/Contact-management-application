const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
const corsOptions = {
  origin: [
    "http://localhost:3004",
    "https://contact-manager99.netlify.app/"
  ],
};
mongoose.connect(process.env.DB_URI)
    .then(() =>
      console.log('Successfully connected to the database'))
    .catch((error) => 
      console.error('Database connection failed',error));

    const contactRouter=require('./routes/contactRoutes');
    app.use('/api',contactRouter);


const PORT=process.env.PORT || 7000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});