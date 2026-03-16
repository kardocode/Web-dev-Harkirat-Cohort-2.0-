const express = require('express');
const errorHandler = require('./middleware/errorHandle');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})