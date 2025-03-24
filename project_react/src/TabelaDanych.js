import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const TabelaDanych = () => {

    useEffect(() => {
        axios.get('http://localhost:8000/task2/records')
            .then(response => {
                console.log('Data received:', response.data);
            })
            .catch(error => {
                console.error('There was an error receiving the data:', error);
            });}, []);
    return (
        <div>
            
        </div>
    );
}