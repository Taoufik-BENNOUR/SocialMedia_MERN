const Message = require("../models/Message");

const router = require("express").Router()


router.post('/',async(req,res)=>{
    const newMessage = await new Message(req.body)
    try {
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
    } catch (error) {
       res.status(400).json(error) 
    }
})

router.get("/:conversationId",async(req,res)=>{
    try {
        const messages = await Message.find({
            conversationId:req.params.conversationId
        })
        res.status(200).json(messages)
    } catch (error) {
        res.status(400).json(error)
    }
})
module.exports = router;