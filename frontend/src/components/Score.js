import axios from 'axios'
import { useContext ,useEffect, useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import ScoreContext from '../context/ScoreContext'
import pokeLogo from "../images/pokemon.png"

function Score() {

    const {userName,score,setScore,inProgress} = useContext(ScoreContext)
    const history = useHistory();
    const [finalScore,setFinalScore] = useState(0);
    useEffect(()=>{

        if(!userName || inProgress){
            history.push("/")
        }

        const writeScore = async ()=>{
            await axios.post('/score',{
                name : userName,
                score
            })
        }

        setFinalScore(score);

         //write score to db
         writeScore();
        setScore(0);
        
    },[])
    return (
        <div className = "flex flex-col items-center justify-center">
            <div className = "flex flex-col items-center justify-center sm: w-full md:w-1/2 lg:w-1/3">
                <img  className = "m-8 h-auto w-64" src = {pokeLogo} alt = "Pokemon Logo"/>
                <p className = "text-4xl text-center">Your Score</p>
                <p className = " my-2 text-8xl bold"> {finalScore} </p>
                <Link to = "/game">
                    <button  className = "bg-green-500 text-white m-3 p-2 text-xl rounded-md hover:bg-green-600">Play Again</button>
                </Link>
                <Link to = "/leaderboard" className = "mt-3 underline text-blue-500" >Leaderboard</Link>
            </div>
        </div>
    )
}

export default Score
