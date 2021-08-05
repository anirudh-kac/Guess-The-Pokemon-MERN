import {useState,useContext,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import Loader from "./Loader"

import ScoreContext from '../context/ScoreContext'

function Game() {
    const {userName,score,incrementScore} = useContext(ScoreContext);
    const history = useHistory()

    const [enteredName , setEnteredName] = useState("");
    const [loading,setLoading] = useState(true);
    const [pokemonName , setPokemonName] = useState("");
    const [image , setImage] = useState("");

    const getNewPokemon = async ()=>{
        setLoading(true);
        const {data} = await axios.get('/pokemon');
        setPokemonName(data.name);
        setImage(data.image);
        setLoading(false)
    }
    
    useEffect(() => {
        if(!userName){
            history.push('/')
            return
        }
        getNewPokemon();
    }, [])

    const handleClick = (e)=>{
        e.preventDefault();
        setEnteredName("");
        if(enteredName.toLowerCase() === pokemonName.toLowerCase()){
            incrementScore();
            //get new pokemon
            getNewPokemon();
            //show message
        }else{
            alert("Wrong")

            //write score
            history.push('/score')
        }
        
    }

    const handleChange = (e) =>{
        setEnteredName(e.target.value);
    }

    return (
        <div className = "flex flex-col items-center justify-center">
            <div className = "mt-5 flex flex-col justify-end">
                
                <p className = "font-bold ">Current Score : {score}</p>
                <p className = "font-bold ">Hi Score : 100</p>
            </div>
            <div className = "flex flex-col items-center justify-center sm: w-full md:w-1/2 lg:w-1/3">

                {loading
                 ? 
                 <Loader/>
                  : 
                <img  className = "h-64 w-auto" src = {image} alt ="Pokemon"/>
                }
                <p className = "text-4xl text-center">Guess the Pokemon</p>

                <div className = "border-2 border-black mt-5">
                    <form>
                        <input className = "p-2" type = "text" name = "name"
                         value = {enteredName}
                         onChange = {handleChange}
                         placeholder = "Pokemon Name"/>
                        <button className = "bg-green-400 p-2 text-white"
                         type = "submit"
                         onClick = {handleClick}
                         >
                             Enter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Game
