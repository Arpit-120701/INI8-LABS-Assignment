const express = require("express")
const colors = require('colors')
const dotenv = require('dotenv')
const userRoutes = require("./routes/userRoutes")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()

dotenv.config()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4080

app.get('/',(req, res)=>{
    res.send("App in running")
    console.log("App is running")
})

app.use("/",userRoutes)
app.all('*', (req, res)=>{ res.send("This route doesn't exist !!!")})

app.listen(4080,()=>{
    console.log(`App is running @Localhost:${PORT}`.bgMagenta.bold)
})