require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("./db/conn");

const Products = require ("./models/productsSchema")
const Deafultdata=require("./deafultdata")
const cors=require("cors")
const router = require("./Routes/Router")
app.use(express.json());
app.use(cors());
app.use(router)
const port = 8005;
app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
});
Deafultdata();