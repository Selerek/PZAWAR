import { useRef, useState } from "react"
import "./NewStatic.css"

function NewComponent(){

    const name1Ref = useRef()
    const name2Ref = useRef()
    const selectValue = useRef()
    const colorValue = useRef()
    const [val1, setVal1] = useState("")
    const [val2, setVal2] = useState("")
    const [val3, setVal3] = useState("")
    const [selected, setSelected] = useState("")
    


    const ColorChange = (event) => {
        colorValue.current = event.target.value
        //console.log(colorValue.current)
    }


    const clickName = () => {
        console.log(name1Ref.current.value)
        console.log(name2Ref.current.value)
        console.log(selectValue.current.value)
        console.log(colorValue.current)
        setVal1(name1Ref.current.value)
        setVal2(name2Ref.current.value)
        setVal3(selectValue.current.value)
        setSelected(colorValue.current)

    }
    return (
        <div className="bigdiv">
            <input type="text" ref={name1Ref} />
            <input type="text" ref={name2Ref} />
            <select ref={selectValue}>
                <option value="CPU">CPU</option>
                <option value="GPU">GPU</option>
                <option value="RAM">RAM</option>
            </select>
            <div>
            <input type="radio"  onClick={ColorChange} value="red" name="category" />red
            <input type="radio" onClick={ColorChange} value="green" name="category" />green
            <input type="radio" onClick={ColorChange} value="blue" name="category" />blue
            <input type = "radio" onClick={ColorChange} value="pink" name="category" />pink
            </div>
            <input onClick={clickName} type="button" value="Zatwierdz" />
            <div className="valuesDiv" style={{backgroundColor:selected}}>
                {val1} 
                {val2}
                {val3}
                
            </div>
            <div>
                <img src="./icons/icon14_01.png" alt="icon"/>
            </div>
        </div>
    )
}
export default NewComponent;