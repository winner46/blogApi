const express = require('express');
const mongoDBConnection = require('./config/db.config');
const routeHandler = require('./routes')
const cloudinary =  require('cloudinary');
const configVariables = require('./config/config')
const app = express();

mongoDBConnection();

cloudinary.config({
    cloud_name: configVariables.CLOUD_NAME,
    api_key: configVariables.CLOUDINARY_PUBLIC,
    api_secret: configVariables.CLOUDINARY_SECERET,
})
app.use(express.json())
app.use('/', routeHandler);

app.use("*", (req, res) =>{
    res.json("ROUTE NOT FOUND");
})

module.exports = app;