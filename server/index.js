const dotenv = require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors'); 
const { connectToDatabase } = require("./config/dbConnection");
const port =  1000;


app.use(express.json());
app.use(cors());
connectToDatabase();

app.use("/api/location", require("./routes/locationsRoute"));
app.use("/api/booking", require("./routes/bookingRoute"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, ()=>{
    console.log('listening on port', port);
});