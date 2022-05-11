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

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
    if(!user)  
    {return res.status(404).json("user not found");}
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      if(!validPassword){ 
        return   res.status(400).json("wrong password")}
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  });
  
module.exports = router
