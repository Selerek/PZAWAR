import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const TaskTabela = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOperator, setFilterOperator] = useState('');
    const [filterAmount, setFilterAmount] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/task1')
            .then(response => response.data.employees)
            .then(data => setData(data));
    },[]);

    const filteredData = data.filter(item => {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = (
          item.first_name.toLowerCase().includes(searchLower) ||
          item.last_name.toLowerCase().includes(searchLower)
        );
    
        let matchesSalary = true;
        if (filterOperator && filterAmount) {
          const salary = Number(item.salary);
          const amount = Number(filterAmount);
          if (filterOperator === '>') {
            matchesSalary = salary > amount;
          } else if (filterOperator === '<') {
            matchesSalary = salary < amount;
          }
        }
        return matchesSearch && matchesSalary;
      });

    return (
        <div>
            <input type="text" placeholder="Search..."  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <select 
                value={filterOperator} 
                onChange={(e) => setFilterOperator(e.target.value)}
                >
                <option value="">--Operator--</option>
                <option value=">">wiecej niz</option>
                <option value="<">mniej niz</option>
            </select>
            <input 
          type="number" 
          placeholder="Kwota" 
          value={filterAmount}
          onChange={(e) => setFilterAmount(e.target.value)}
        />
            <table>
           {
            filteredData.map((item, index ) => {
                if(false){
                    return null;
                }
                return (
                <tr key={index}
                onClick={() => setSelectedRow(index)}
                style={{ 
                  backgroundColor: selectedRow === index ? 'green' : 'transparent',
                  cursor: 'pointer'
                }}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.department}</td>
                    <td>{item.position}</td>
                    <td>{item.salary}</td>
                    <td>{item.hire_date}</td>

                </tr>)
            })
           }
           </table>
        </div>
    );
};

export default TaskTabela;