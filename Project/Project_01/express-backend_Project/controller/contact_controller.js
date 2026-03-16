const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@routes GET /api/contacts
//@access public 

const getContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Get all contacts"});
});

//@desc Get Specific contacts
//@routes GET /api/contacts
//@access public 
const getIdContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
});

//@desc Create New contact
//@routes POST /api/contacts
//@access public 

const createContact = asyncHandler(async(req,res) => {
    console.log("The Request body is: ",req.body);
    const {name,email,phone} = req.body;
    if(!(name||email||phone)){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    res.status(201).json({message:"Create contacts"});
});

//@desc Update specific contacts
//@routes PUT /api/contacts
//@access public 

const updateContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Update contacts for ${req.params.id}`});
});

//@desc Delete specific contacts
//@routes DELETE /api/contacts
//@access public 

const deleteContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Delete contacts for ${req.params.id}`});
});

module.exports = {getContact,getIdContact,createContact,updateContact,deleteContact};