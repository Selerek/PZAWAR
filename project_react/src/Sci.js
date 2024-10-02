import { useRef } from "react"

function Sci(){
    const inputRef = useRef()
    const buttonhandler = () => {
       console.log("wowowow")
       console.log(inputRef.current.value)
        
    }
    const inputhandler = (event) => {
        //console.log(event.target.value)
        
          
    }
    return (
        <div>
            <input onClick={buttonhandler} type="button" value={123123}></input>
            <input ref = {inputRef} onChange={inputhandler} type="text" ></input>
        </div>
    )
}
export default Sci;