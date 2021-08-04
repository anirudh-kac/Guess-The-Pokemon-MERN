import pokeLogo from "../images/pokemon.png"
function Home() {
    return (
        <div className = "flex flex-col items-center justify-center">
            <div className = "flex flex-col items-center justify-center sm: w-full md:w-1/2 lg:w-1/3">
                <img  className = "h-64 w-auto" src = {pokeLogo} alt = "Pokemon Logo"/>
                <p className = "text-4xl text-center">Guess the Pokemon</p>
                <p className = "text-md text-center">Enter your name to start</p>

                <div className = "border-2 border-black mt-5">
                    <form>
                        <input className = "p-2"type = "text" name = "name" placeholder = "Enter your name"/>
                        <button className = "bg-green-400 p-2 white" type = "submit">Start</button>
                    </form>
                </div>

                <a href = "/" className = "mt-3 underline text-blue-500" >Leaderboard</a>
            </div>
        </div>
    )
}

export default Home
