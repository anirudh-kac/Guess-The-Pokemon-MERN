import axios from 'axios'
import { useState  , useEffect} from 'react';
import { Link } from 'react-router-dom'
import pokeLogo from '../images/pokemon.png'
function Leaderboard() {
    const [scores , setScores] = useState([{}]);

    useEffect(()=>{
        const fetchScores = async ()=>{
            const {data} = await axios.get('/score')
            setScores(data)
        }

        fetchScores();
    },[])
    return (
        <div>
            <div className = "flex flex-col items-center justify-center">
            <div className = "flex flex-col items-center justify-center sm: w-full md:w-1/2 lg:w-1/3">
                <img  className = "m-8 h-auto w-64" src = {pokeLogo} alt = "Pokemon Logo"/>
                <p className = "text-4xl text-gray-500">Leaderboard</p>

                {scores ? 
                    <table class = "table-fixed">
                        <thead>
                            <tr>
                                <th class = "w-1/4 p-4 text-blue-700 text-2xl">Rank</th>
                                <th class = "w-1/2 p-4 text-blue-700 text-2xl">Username</th>
                                <th class = "w-1/4 p-4 text-blue-700 text-2xl">Score</th>
                            </tr>
                        </thead>
                    
                    {scores.map((s,idx) => (
                        <tr key = {s._id} className = {`${idx === 0 && "bg-blue-200" }`}>
                            <td class = "text-green-600 text-xl">{idx+1}</td>
                            <td class = "text-indigo-600 text-xl">{s.name}</td>
                            <td class = "text-red-600  font-semibold text-xl">{s.score}</td>
                        </tr>
                    ))}
                     </table>
                 : 
                 <p className = "font-2xl">No Scores on Leaderboard</p>
                }
                <Link to = "/home" className = "mt-3 underline text-blue-500" >Home</Link>
                
            </div>
        </div>
        </div>
    )
}

export default Leaderboard
