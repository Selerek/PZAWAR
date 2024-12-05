import { useEffect, useState } from "react"
import "./NewStatic.css"

function NewComponent(){
    const[name, SetName] = useState("Bartek") 
    const[num] = useState(0)
    
    useEffect(() => {} , [name],
    console.log("useEffect is called"),
    []
    )


    const clickName = () => {
        console.log("Booomba")
        SetName("Boooomba")
    }
    const Mystyle = {
        color : "red",
        "font-size" : "30px",
        backgroundColor : "pink",
    }
    return (
        <div>
            <h1 className="bomba">Bomba</h1>
            <p style={Mystyle}>{name} {num}</p>
            <input onClick={clickName}   type="button"></input>
        </div>
    )
}
export default NewComponent;