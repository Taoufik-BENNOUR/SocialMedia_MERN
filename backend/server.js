require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const helmet = require("helmet") //request logger
const morgan = require("morgan"); //secure http headers
const connectDB = require("./config/connectDB");
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

const  app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
connectDB();


app.use('/api/users',authRoute)
app.use('/users',userRoute)
app.use('/posts',postRoute)


app.listen(process.env.PORT,(err)=>{
    err? console.log("Server connection failed"):
    console.log(`Server is running on port ${process.env.PORT}`)
})