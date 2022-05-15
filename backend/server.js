require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const helmet = require("helmet") //request logger
const morgan = require("morgan"); //secure http headers
const connectDB = require("./config/connectDB");
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const conversationRoute = require('./routes/conversations')
const messageRoute = require('./routes/messages')
const multer = require("multer")
const path = require("path");

const  app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
connectDB();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../frontend/public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
// app.use("/images", express.static(path.join(__dirname, "public/images")));
const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req,res)=>{
    try {
        return res.status(200).json("Filed uploaded")
    } catch (error) {
        res.status(400).json(error)
    }
})
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/conversations',conversationRoute)
app.use('/api/message',messageRoute)


app.listen(process.env.PORT,(err)=>{
    err? console.log("Server connection failed"):
    console.log(`Server is running on port ${process.env.PORT}`)
})