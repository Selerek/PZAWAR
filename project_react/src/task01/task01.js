import React from 'react';
import json from './posts.json';
import { useState, setState } from 'react'; 
const Task01 = () => {
   
    const posts = json.map((post) => {
        let formattedId = post.id % 40;
        if ((formattedId >= 0) && (formattedId <= 9)) {
            formattedId = "0" + formattedId;
        }
        return (
            <div key={post.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '20%' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{post.title}</h3>
            <img src={`./icons/icon14_${formattedId}.png`} alt={formattedId} style={{ width: '50px', height: '50px' }} />
            </div>
        )

    })
    
    const [value, setValue] = useState(0);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
            />
            <div>{value}</div>
            
            <div style={{display: "flex", width: '100%'}}>
                {posts.slice(0, value)}</div>
        </>
    );
};

export default Task01;