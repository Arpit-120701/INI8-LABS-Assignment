const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

//Genaerating Array 

let  users = [];

const getUsers = (req, res) => {
    res.send(users)
};

const addUser = (req,res)=>{
    try
    {
        const user = req.body;
        users.push({...user, id:uuidv4() });
        res.send("Successfully Added !!")
        console.log(uuidv4())
    }
    catch(error)
    {
        res.send(400)
        throw new Error("Error !!", error.message)
    }
}

const getSingleUser = (req, res ) =>{
    const singleUser = users.find((user)=> user.id === req.params.id);
    res.send(singleUser)
}

const deleteUser = (req, res)=> {
    users = users.filter((user)=> user.id !== req.params.id);
    res.send("Users deleted Successfully !!")
}


const updateUser = (req, res) =>{
    try
    {
        const user = users.find((user)=> user.id === req.params.id);

        user.fullName = req.body.fullName
        user.email =  req.body.email ;
        user.location = req.body.location ;
        user.graduation = req.body.graduation ;
        user.dob = req.body.dob;
        user.Mobile = req.body.Mobile;
        res.send("user updated successfully !!!")
    }
    catch(error)
    {
        res.send(400)
        throw new Error("Error !!", error.message)
    }
     
};

module.exports = { getUsers , addUser , getSingleUser , deleteUser , updateUser}