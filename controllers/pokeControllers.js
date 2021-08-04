const express = require("express")

const router = express.Router()

//gets a random pokemon
router.get('/',(req,res)=>{
    const data = {
        name : "Pikachu",
        image : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }

    res.json(data).status(200);
})

module.exports = router