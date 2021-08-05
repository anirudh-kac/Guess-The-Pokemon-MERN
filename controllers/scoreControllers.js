const express = require("express")

const Score = require('../models/Score')

const router = express.Router()

//get all scores
router.get('/',async (req,res)=>{
    const scores = await Score.find({}).limit(10).sort('-score').exec()
    console.log(scores);
    res.json(scores).status(200);
})


router.post('/',async (req,res)=>{
    const {name,score} = req.body;
    const s = new Score({name,score});
    await s.save();
    res.json(s).status(201);
})
module.exports = router