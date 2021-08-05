const express = require("express")
const axios = require("axios");

const router = express.Router()

const API_URL = "https://pokeapi.co/api/v2/pokemon"
//gets a random pokemon
router.get('/',async (req,res)=>{
    //generate random id between 0 and 500
    const id = Math.floor(Math.random()*500);
    const {data} = await axios.get(`${API_URL}/${id}`);

    const name = data.name;
    const image = data.sprites.front_default;

    const pokemon = {name,image};

    console.log(pokemon);
    res.json(pokemon).status(200);
})

module.exports = router