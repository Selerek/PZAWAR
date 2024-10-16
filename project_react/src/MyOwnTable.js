import { useState } from "react";
import MyOwnRow from "./MyOwnRow";

function MyOwnTable() {
    const data = ["text1", "text2", "text3", "text4", "text5"];
    const data2 = [
        {id: "0ee7ad32-26ec-4c82-9c7c-72519f4656de" ,key1: "text1", key2: "text2"},
        {id:"63b8c0fd-2cd3-4095-902f-841a7b4fad2b", key1: "text1", key2: "text2"},
        {id:"24c96781-c56d-4dca-8b01-40c3df350ada",key1: "text1", key2: "text2"},
    ]
    const[flag, SetFlag] =  useState(false)

  return (
    <div>
        {/* {
            flag ? <div>dziala</div> : <div>nie dziala</div>
        } */
            flag ? <div>dziala</div> : null
        }
        <button onClick={() => SetFlag(!flag)}>Zmien</button>

      <table>
        <thead>
          <tr>
            <th>lp</th>
            <th>Data1</th>
            <th>Data2</th>
          </tr>
        </thead>
        <tbody>
        {
         data.map((el, index, arr) => {
            return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{el}</td>
                    <td></td>
                </tr>
            )
         })

        }
        {/* { {
            data2.map((el, index, arr) => {
                return(
                    <tr key={index}>

                        <td>{index + data.length + 1}</td>
                        <td>{el.key1} {el.key2}</td>
                        <td></td>
                    </tr>
                )
            })
        } } */
        data2.map((el, index, arr) => <MyOwnRow index = {index} el = {el.key1} el2 = {el.key2} onButtonClick = {() => SetFlag(!flag)} />)
}
        </tbody>
        </table>

    </div>

  );
}

export default MyOwnTable;