import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const TabelaUserow = () => {
    
    const [data, setData] = useState([]);
    const getUsers = () => {
        axios.get('http://localhost:8000/user/records')
        .then((response) => {setData(response.data.records)} )
    }
    useEffect(() => {
        getUsers();
    }, []);
    console.log(data);
    return (
        <div>
            <table class="table" >
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>email</td>
                        <td>password</td>
                    </tr>
                </thead>
                <tbody>
            {data.map((item, index) => (
                
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                    </tr>
                
            ))}
            </tbody>
            </table>
        </div>
    );
};

export default TabelaUserow;