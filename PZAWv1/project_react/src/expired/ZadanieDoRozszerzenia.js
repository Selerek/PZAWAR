import React from 'react';

const ZadanieDoRozszerzenia = () => {
    const data = [
        {
            "name": "Julia Szembek",
            "age": 17,
            "sex": "Male",
        },
        {
            "name": "White 2115",
            "age": 2115,
            "sex": "Z każdym",
        },
        {
            "name": "Karolina Konopska",
            "age": "miedzy 35 a 50",
            "sex": "Tester",
        },
        { 
            "name": "Damijan",
            "age": 69,
            "sex": "Famel",
        }  
    ];


    return (
        <div>
            <table class="table" >
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Sex</td>
                    </tr>
                </thead>
                <tbody>
            {data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.sex}</td>
                    </tr>
                )
            })}
            </tbody>
            </table>
        </div>
    );
};

export default ZadanieDoRozszerzenia;