const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connected")
});

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})