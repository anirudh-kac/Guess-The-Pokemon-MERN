import {useState,useContext,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


import Loader from "./Loader"

import ScoreContext from '../context/ScoreContext'

function Game() {
    const {userName,score,incrementScore,inProgress,setInProgress} = useContext(ScoreContext);
    const history = useHistory()

    const [enteredName , setEnteredName] = useState("");
    const [loading,setLoading] = useState(true);
    const [pokemonName , setPokemonName] = useState("");
    const [image , setImage] = useState("");
    const [hiScore,setHiScore] = useState(0);

    const notify = () => toast('Correct');
    //gets a new pokemon
    const getNewPokemon = async ()=>{
        setLoading(true);
        const {data} = await axios.get('/pokemon');
        setPokemonName(data.name);
        setImage(data.image);
        setLoading(false)
    }


    //dont allow without name , and get first pokemon
    useEffect(() => {
        if(!userName || !inProgress){
            history.push('/')
            return
        }
        const fetchHiScore = async ()=>{
            const {data} = await axios.get('/score/hiscore');
            setHiScore(data.score);
        }

        fetchHiScore();
        getNewPokemon();
    }, [])

    //checks if entered name is correct  and based on that either continue or move to next
    const handleClick = (e)=>{
        e.preventDefault();
        setEnteredName("");
        if(enteredName.toLowerCase() === pokemonName.toLowerCase()){
            notify();
            incrementScore();
            //get new pokemon
            getNewPokemon();
            //show message
        }else{
            setInProgress(false)
            toast.error(`Wrong!!!\n This was ${pokemonName.toUpperCase()}`,{
                duration:1000,
            })
            setTimeout(()=>{
                history.push('/score')
            },1500)
            
        }
        
    }

    const handleChange = (e) =>{
        setEnteredName(e.target.value);
    }

    return (
        <div className = "flex flex-col items-center justify-center">
            <div className = "mt-5 flex flex-col justify-end">
                
                <p className = "font-bold ">Current Score : {score}</p>
                <p className = "font-bold ">Last Hi Score : {hiScore}</p>
            </div>
            <div className = "flex flex-col items-center justify-center sm: w-full md:w-1/2 lg:w-1/3">

                <Toaster position = "top-right" toastOptions = {{
                    duration : 500,
                    style : {
                        background : '#52de67',
                        color:'#fff'
                    }
                }}/>
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
                         disabled = {loading}
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
