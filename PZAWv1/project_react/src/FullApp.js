import React from 'react';
import { useState } from 'react';

const FullApp = () => {

    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <button onClick={setShowForm(true)} >Formularz</button>
            <button onClick={setShowForm(false)}>Tabela</button>
        </div>
    );
};

export default FullApp;