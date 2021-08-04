import { useState , createContext} from "react";

const ScoreContext = createContext()

export const ScoreProvider = ({children})=>{
    const [userName , setUserName] = useState("")
    const [score , setScore] = useState(0);

    const incrementScore = ()=>{
        setScore(score+1);
    }
    return (
        <ScoreContext.Provider value = {{userName,setUserName,score,setScore,incrementScore}}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContext

