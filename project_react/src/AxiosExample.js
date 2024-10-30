import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function AxiosExample(){
    function clickhandler(){
        axios.get('https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json')
        .then((response) => { setData(response.data); })
        .catch((error) => { console.log(error); })
        .finally(() => {console.log('Finally!')});
    }
    const [data, setData] = useState({});
    return(
        <div>
            <h1>Axios Example</h1>
            <input type='button' onClick={clickhandler} value={"Click"} />
            <br/>
            {JSON.stringify(data)}
            {Object.keys(data).map((key) => (
                <div key={key}>
                    <label>
                        <input type="checkbox" checked={data[key]} readOnly />
                        {key}
                    </label>
                </div>
            ))}
        </div>
    );
}
export default AxiosExample;