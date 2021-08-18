import img from "../images/loader.gif"

function Loader() {
    return (
        <>
        <div className = "h-64 w-auto flex">
            <img className = "m-auto h-32 w-auto" src={img} alt = "Loader" />
        </div>
        <p className = "text-center">Loading...</p>
        </>
    )
}

export default Loader
