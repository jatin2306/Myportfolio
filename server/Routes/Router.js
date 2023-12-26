const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema")

// get product api
router.get("/getproducts",async(req,res)=>{
    try{
        const productsdata = await Products.find()
        console.log("console the data"+productsdata)
        res.status(201).json(productsdata)
    }
    catch(error){
        console.log("no data found error h bhaiii"+error.message)
    }
})

 
module.exports = router

