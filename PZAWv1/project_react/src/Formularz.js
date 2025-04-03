import axios from 'axios';
import React, { useState } from 'react';

const Formularz = () => {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        text: '',
        checkbox: false,
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        try {
            const response = await axios.post('http://localhost:8000/task2', formData);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('There was an error sending the data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="url">URL:</label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="text">Text:</label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="checkbox">Message:</label>
                <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked={formData.checkbox}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Formularz;
