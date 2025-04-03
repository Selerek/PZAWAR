import React, { useState } from 'react';
import { useRef } from 'react';

const Zadanie1703 = () => {
    const [inpText, setInpText] = useState("");
    const text = useRef("")
    const num = useRef("")
    //const numArr = [];
    const [numArr, setNumArr] = useState([])
    function addHandle(){
        setInpText(inpText + " " + text.current.value);
    }
    function cleerHandle() {
        setInpText("");
    }
    function dodajLiczbe(){
        //setNumInp(num);
        setNumArr([...numArr, num.current.value])
        // numArr.push(num.current.value);
        // setNumArr([...numArr]);
    }





    return (
        <div>

            <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Oh la la </span>
            </div>
            <input type="text" ref={text} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
            <button class="btn btn-primary" onClick={addHandle} type="submit">Add</button>
            <button class="btn btn-primary" onClick={cleerHandle} type="submit">Delete</button>
            </div>
            <div className='kontenerczycos' style={{width: "250px", marginTop: "50px", border: "1px solid black", textWrap: "stable"}}>
            <p>twojtexkstczycos</p>
            {inpText}
            </div>

            <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Number boomer</span>
            </div>
            <input type="text" ref={num} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
            <button class="btn btn-primary" onClick={dodajLiczbe} type="submit">Add num</button>
            </div>
            <div className='kontenerczycos' style={{marginTop: "50px", textWrap: "stable", marginBottom: "50px"}}>
            <table class='table'>
                <thead>
                    <td>index</td>
                    <td>liczba</td>
                </thead>
            {numArr.map((item, index) => {
                return(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                    </tr>
                )
            })}
            </table>
            </div>

            



        </div>
    );
};

export default Zadanie1703;