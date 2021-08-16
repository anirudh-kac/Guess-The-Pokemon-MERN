import { useState , useContext } from 'react'
import {useHistory,Link} from 'react-router-dom'

import ScoreContext from '../context/ScoreContext'

import pokeLogo from "../images/pokemon.png"

function Home() {

    const {setUserName , setScore,setInProgress} = useContext(ScoreContext);
    const [name,setName] = useState("");

    const history = useHistory()

    const handleChange = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setScore(0)
        setInProgress(true)
        setUserName(name)
        history.push('/game');
    }

    return (
        <div className = "flex flex-col items-center justify-center">
            <div className = "flex flex-col items-center justify-center sm: w-full md:w-1/2 lg:w-1/3">
                <img  className = "m-8 h-auto w-64" src = {pokeLogo} alt = "Pokemon Logo"/>
                <p className = "text-4xl text-center">Guess the Pokemon</p>
                <p className = "text-md text-center">Enter your name to start</p>

                <div className = "border-2 border-black mt-5">
                    <form>
                        <input className = "p-2"type = "text" name = "name" value = {name} onChange = {handleChange} placeholder = "Enter your name"/>
                        <button className = "bg-green-400 p-2 white" type = "submit" onClick = {handleSubmit}>Start</button>
                    </form>
                </div>

                <Link to = "/leaderboard" className = "mt-3 underline text-blue-500" >Leaderboard</Link>
            </div>
        </div>
    )
}

export default Home
