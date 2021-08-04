import {useState} from 'react'

function Game() {
    const [enteredName , setEnteredName] = useState("");

    const handleClick = (e)=>{
        e.preventDefault();
        if(enteredName === "poke"){
            alert("Clicked")
        }else{
            alert("Wrong")
        }
        
    }

    const handleChange = (e) =>{
        setEnteredName(e.targetValue);
    }
    return (
        <div className = "flex flex-col items-center justify-center">
            <div className = "mt-5 flex flex-col justify-end">
                <p className = "font-bold ">Current Score : 100</p>
                <p className = "font-bold ">Hi Score : 100</p>
            </div>
            <div className = "flex flex-col items-center justify-center sm: w-full md:w-1/2 lg:w-1/3">
                <img  className = "h-64 w-auto" src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt = "Pokemon Logo"/>
                <p className = "text-4xl text-center">Guess the Pokemon</p>

                <div className = "border-2 border-black mt-5">
                    <form>
                        <input className = "p-2" type = "text" name = "name"
                         value = {enteredName}
                         onChange = {handleChange}
                         placeholder = "Pokemon Name"/>
                        <button className = "bg-green-400 p-2 white"
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
