import axios from 'axios';
import React from 'react';
import { useRef } from 'react';

const FormTask = () => {
    const nameRef = useRef()
    const surnameRef = useRef()

 

    
    function clickhandler() {
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;    
        axios.post('http://localhost:8000/register', { name, surname })
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
            
            <input type='button' onClick={clickhandler} value={"Click"} />
        </div>
    );
};

export default FormTask;