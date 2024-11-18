import axios from 'axios';
import React from 'react';
import { useRef } from 'react';

const FormTask = () => {
    const nameRef = useRef()
    const surnameRef = useRef()
    const genderRef = useRef()
   



    const genderSet = (event) => {
        genderRef.current = event.target.value
    }
 

    
    function clickhandler() {
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        const gender = genderRef.current;
    
        axios.post('http://localhost:8000/wyslanodane', { name, surname, gender })
            .then(response => {
                console.log('Data sent successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error sending the data:', error);
            });
    }

    return (
        <div>
            <h1>Witaj w ankiecie</h1>
            <input type='text' name='imie' ref={nameRef}/>
            <input type='text' name='nazwsko' ref={surnameRef}/> <br></br>  
            <input type='checkbox' name='alkoholik' style={{ marginRight: '5px' }} />Alkoholik   
            <input type='checkbox' name='palacz' />Palacz<br></br>
            <input type='checkbox' name='drugs'/>cpun<br></br>
            <input type='radio'onChange={genderSet} value={"mezczyzna"}/>Mezczyzna<br></br>
            <input type='radio'onChange={genderSet}value={"kobieta"}/>Kobieta<br></br>
            <input type='radio'onChange={genderSet}value={"inna"}/>Inna<br></br>
            <input type='button' onClick={clickhandler} value={"Click"} />
        </div>
    );
};

export default FormTask;