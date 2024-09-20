function Button(){
    function handleClick(){
        console.log("Przycisk został naciśnięty")
    }

    return <button onClick={handleClick}>
        Naciśnij mnie
    </button>
}
export default Button