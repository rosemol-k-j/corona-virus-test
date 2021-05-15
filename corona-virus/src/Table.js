import React from "react";

function Table(props){
return (
    <table>
        <tbody>
        <tr>
            <th>
                COMPOSITIONS
            </th>
            <th>
                RESULT
            </th>
        </tr>
        {props.compositionList.map((item,index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.composition}
                    </td>
                    <td>
                        {item.result}
                    </td>

                </tr>
            )
        })}
        </tbody>
    </table>
)    
}

export default Table;