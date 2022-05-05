const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
//register


router.post('/register',async (req,res)=>{
const newUser = await new User({...req.body})

try {

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password,salt)

newUser.password = hashedPassword
const user = await newUser.save()

res.status(200).json({msg:"User registred",user})

} catch (error) {
    res.status(402).json({msg:"Register failled",error:error})
}
})

router.post("/login",async (req,res)=>{
    
    try {
        const user = await  User.findOne({email:req.body.email})
        !user && res.status(404).json({msg:"User doesnt exist"}) 

        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("Wrong password")
  
      return  res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router
