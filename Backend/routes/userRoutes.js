const express= require('express')
const { getUsers , addUser , getSingleUser, deleteUser , updateUser} = require("../Controllers/userController")

const router = express.Router();

router.get('/getuser', getUsers)
router.post('/adduser',addUser);
router.get('/oneuser/:id',getSingleUser);
router.delete('/deleteuser/:id', deleteUser)
router.put("/updateuser/:id", updateUser )

module.exports = router